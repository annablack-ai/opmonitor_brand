#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
IMAGE_ROOT="$ROOT_DIR/website/public/images"
MANIFEST_PATH="$IMAGE_ROOT/IMAGE_MANIFEST.md"

QUALITY=82
FORCE=0
DRY_RUN=0
SECTION=""
NAME=""
SOURCE_FILE=""

usage() {
  cat <<'EOF'
Usage:
  ./manage_website_image.sh --section <section> --source <file> [--name <final_name>] [--quality <0-100>] [--force] [--dry-run]
  ./manage_website_image.sh --list-sections

Sections:
  brand
  home
  products
  product-screenshots
  cases
  news
  about
  contact

Examples:
  ./manage_website_image.sh --section home --source ~/Downloads/hero.png --name home_hero_main
  ./manage_website_image.sh --section products --source ~/Downloads/medical-waste.png --name medical_waste_hero
  ./manage_website_image.sh --section news --source ~/Downloads/policy-cover.png --name news_cover_policy --quality 86

Behavior:
  - PNG/JPG/JPEG are converted to WebP.
  - Existing WebP files are copied into the target folder.
  - Output is stored under website/public/images/<section>/.
  - Names are normalized to lowercase snake_case.
EOF
}

list_sections() {
  printf '%s\n' \
    'brand' \
    'home' \
    'products' \
    'product-screenshots' \
    'cases' \
    'news' \
    'about' \
    'contact'
}

normalize_name() {
  printf '%s' "$1" \
    | tr '[:upper:]' '[:lower:]' \
    | sed -E 's/\.(png|jpg|jpeg|webp)$//' \
    | sed -E 's/[^a-z0-9]+/_/g' \
    | sed -E 's/^_+//; s/_+$//; s/_+/_/g'
}

is_valid_section() {
  case "$1" in
    brand|home|products|product-screenshots|cases|news|about|contact)
      return 0
      ;;
    *)
      return 1
      ;;
  esac
}

ensure_dependencies() {
  if command -v cwebp >/dev/null 2>&1; then
    CONVERTER='cwebp'
    return 0
  fi

  if command -v sips >/dev/null 2>&1; then
    CONVERTER='sips'
    return 0
  fi

  if command -v ffmpeg >/dev/null 2>&1; then
    CONVERTER='ffmpeg'
    return 0
  fi

  echo 'Error: no supported converter found. Install cwebp or use macOS sips.' >&2
  exit 1
}

convert_to_webp() {
  local input_path="$1"
  local output_path="$2"

  case "$CONVERTER" in
    cwebp)
      cwebp -quiet -q "$QUALITY" "$input_path" -o "$output_path"
      ;;
    sips)
      sips -s format webp "$input_path" --out "$output_path" >/dev/null
      ;;
    ffmpeg)
      ffmpeg -loglevel error -y -i "$input_path" -quality "$QUALITY" "$output_path"
      ;;
  esac
}

manifest_status() {
  local file_name="$1"

  if [[ -f "$MANIFEST_PATH" ]] && grep -Fq -- "- $file_name" "$MANIFEST_PATH"; then
    echo "Manifest: matched existing entry in website/public/images/IMAGE_MANIFEST.md"
  else
    echo "Manifest: no existing entry found, confirm this name should be added to IMAGE_MANIFEST.md"
  fi
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    --section)
      SECTION="${2:-}"
      shift 2
      ;;
    --source)
      SOURCE_FILE="${2:-}"
      shift 2
      ;;
    --name)
      NAME="${2:-}"
      shift 2
      ;;
    --quality)
      QUALITY="${2:-}"
      shift 2
      ;;
    --force)
      FORCE=1
      shift
      ;;
    --dry-run)
      DRY_RUN=1
      shift
      ;;
    --list-sections)
      list_sections
      exit 0
      ;;
    --help|-h)
      usage
      exit 0
      ;;
    *)
      echo "Error: unknown argument '$1'" >&2
      usage >&2
      exit 1
      ;;
  esac
done

if [[ -z "$SECTION" || -z "$SOURCE_FILE" ]]; then
  usage >&2
  exit 1
fi

if ! is_valid_section "$SECTION"; then
  echo "Error: invalid section '$SECTION'" >&2
  list_sections >&2
  exit 1
fi

if [[ ! -f "$SOURCE_FILE" ]]; then
  echo "Error: source file not found: $SOURCE_FILE" >&2
  exit 1
fi

if [[ ! "$QUALITY" =~ ^[0-9]+$ ]] || (( QUALITY < 0 || QUALITY > 100 )); then
  echo 'Error: quality must be an integer between 0 and 100.' >&2
  exit 1
fi

ensure_dependencies

SOURCE_BASENAME="$(basename "$SOURCE_FILE")"
SOURCE_EXT="${SOURCE_BASENAME##*.}"
SOURCE_EXT_LOWER="$(printf '%s' "$SOURCE_EXT" | tr '[:upper:]' '[:lower:]')"

if [[ -n "$NAME" ]]; then
  OUTPUT_STEM="$(normalize_name "$NAME")"
else
  OUTPUT_STEM="$(normalize_name "$SOURCE_BASENAME")"
fi

if [[ -z "$OUTPUT_STEM" ]]; then
  echo 'Error: output name resolved to empty after normalization.' >&2
  exit 1
fi

TARGET_DIR="$IMAGE_ROOT/$SECTION"
TARGET_FILE="$TARGET_DIR/$OUTPUT_STEM.webp"
WEBSITE_RELATIVE_PATH="public/images/$SECTION/$OUTPUT_STEM.webp"

if [[ -f "$TARGET_FILE" && "$FORCE" -ne 1 ]]; then
  echo "Error: target file already exists: $TARGET_FILE" >&2
  echo 'Use --force to overwrite it.' >&2
  exit 1
fi

mkdir -p "$TARGET_DIR"

echo "Converter: $CONVERTER"
echo "Source: $SOURCE_FILE"
echo "Target: $TARGET_FILE"
echo "Website path: $WEBSITE_RELATIVE_PATH"

if [[ "$DRY_RUN" -eq 1 ]]; then
  echo 'Dry run only, no file written.'
  manifest_status "$OUTPUT_STEM.webp"
  exit 0
fi

TMP_OUTPUT="$TARGET_FILE.tmp.webp"
rm -f "$TMP_OUTPUT"

case "$SOURCE_EXT_LOWER" in
  webp)
    cp "$SOURCE_FILE" "$TMP_OUTPUT"
    ;;
  png|jpg|jpeg)
    convert_to_webp "$SOURCE_FILE" "$TMP_OUTPUT"
    ;;
  *)
    echo "Error: unsupported source format '$SOURCE_EXT_LOWER'. Use png, jpg, jpeg, or webp." >&2
    rm -f "$TMP_OUTPUT"
    exit 1
    ;;
esac

mv -f "$TMP_OUTPUT" "$TARGET_FILE"

echo 'Done.'
manifest_status "$OUTPUT_STEM.webp"
