#!/usr/bin/env bash

port=8000

echo "Launching static server on http://localhost:$port"

echo "Press Ctrl+C to stop."

python3 -m http.server "$port"
