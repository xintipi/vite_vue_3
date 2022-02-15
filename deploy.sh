#!/usr/bin/env sh

# build
npm run build

# build stating
npm run build:staging

git add dist -f
git commit -m "adding dist"
git subtree push --prefix dist origin gh-pages
