#!/usr/bin/env bash
# Build the site and publish it to the `gh-pages` branch (no CI required).
# Usage: npm run deploy   (or: bash scripts/deploy-ghpages.sh)
#
# Afterwards, set the repo's Pages source once:
#   Settings -> Pages -> Source: "Deploy from a branch" -> branch: gh-pages, folder: / (root)
set -euo pipefail

cd "$(dirname "$0")/.."

echo "Building (base=/courtsim/)..."
GITHUB_PAGES=true npm run build

# Disable Jekyll so files/dirs are served as-is.
touch dist/.nojekyll
# SPA fallback: serve index.html for unknown deep links.
cp dist/index.html dist/404.html

ORIGIN="$(git remote get-url origin)"

# Publish the built output as the root of an orphan gh-pages branch.
cd dist
rm -rf .git
git init -q
git checkout -q -b gh-pages
git add -A
git -c user.email="deploy@courtsim.local" -c user.name="Courtsim Deploy" \
  commit -q -m "Deploy to GitHub Pages"
git push -q -f "$ORIGIN" gh-pages
rm -rf .git

echo ""
echo "Published to gh-pages."
echo "If you haven't already: Settings -> Pages -> Source: Deploy from a branch -> gh-pages / (root)"
echo "Live at: https://blindmo.github.io/courtsim/"
