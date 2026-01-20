#!/bin/bash
cd "$(dirname "$0")/out"
echo "🚀 Serving build files on http://localhost:8000"
echo "Press Ctrl+C to stop"
python3 -m http.server 8000
