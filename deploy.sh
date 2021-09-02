#!/usr/bin/env sh

cd dist/
git init .
git add .
git commit -m'deploy'
git push -f https://github.com/kungfuboy/create-log.git master:gh-pages
cd -
