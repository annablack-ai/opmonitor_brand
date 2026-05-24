#!/usr/bin/env bash
set -euo pipefail

NOTES_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TIMESTAMP="$(date '+%Y-%m-%d_%H-%M-%S')"

TITLE="${*:-Daily Note}"
# Keep the filename safe and portable.
SAFE_TITLE="$(printf '%s' "$TITLE" | tr ' ' '_' | tr -cd '[:alnum:]_-.')"

if [[ -n "$SAFE_TITLE" ]]; then
  FILE_NAME="${TIMESTAMP}_${SAFE_TITLE}.md"
else
  FILE_NAME="${TIMESTAMP}.md"
fi

FILE_PATH="${NOTES_DIR}/${FILE_NAME}"

cat > "$FILE_PATH" <<EOF
# ${TITLE}

Created: $(date '+%Y-%m-%d %H:%M:%S')

## Notes

- 

## TODO

- [ ] 
EOF

echo "Created: $FILE_PATH"
