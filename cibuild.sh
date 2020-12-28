#!/usr/bin/env bash
set -e # halt script on error

echo 'Testing travis...'
npm install
npm run build
