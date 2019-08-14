#!/usr/bin/env bash

set -e

rm -rf build
mkdir -p build

# Markdown to HTML
pandoc \
  "../README.md" \
  --metadata title="Best Practices" \
  --metadata author="Darek Kay" \
  --metadata description="A guide for building better applications." \
  --metadata lang="en" \
  --metadata authorUrl="https://darekkay.com" \
  --metadata githubUrl="https://github.com/darekkay/best-practices" \
  --to html \
  --standalone \
  --highlight-style="$HOME/.pandoc/themes/tomorrow-night.theme" \
  --template="$HOME/.pandoc/templates/darekkay.html" \
  --filter="$HOME/.pandoc/filters/strip-h1.js" \
  --filter="$HOME/.pandoc/filters/add-headline-anchors.js" \
  --filter="$HOME/.pandoc/filters/external-links.js" \
  --output "./build/index.html"

echo "Generated docs in ./build"
