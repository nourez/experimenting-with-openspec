#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
TARGETS=("node_modules" ".svelte-kit" "build" "dist" ".deno")

cd "$ROOT_DIR"

delete_dir() {
  local dir="$1"
  if [ -d "$dir" ]; then
    rm -rf "$dir"
    echo "Removed $dir"
  fi
}

for target in "${TARGETS[@]}"; do
  # Remove from root
  delete_dir "$target"
  # Remove from nested workspaces (one level deep)
  find . -maxdepth 3 -type d -name "$target" -prune -print0 | while IFS= read -r -d '' path; do
    if [ -d "$path" ]; then
      rm -rf "$path"
      echo "Removed $path"
    fi
  done
done

echo "Workspace artifacts cleared."
