#!/bin/bash

# Copy src to dist to make it easier to test .ts files in chrome.
cp -rf src/ dist/

npm start
