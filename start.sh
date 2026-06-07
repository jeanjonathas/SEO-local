#!/bin/bash

# Navigate to the script's directory
cd "$(dirname "$0")" || exit 1

echo "=== System Startup Script ==="

PORT=3000

# 1. Kill any Node/Next processes running in the current directory
echo "Killing any existing Node/Next.js processes in this directory..."
CURRENT_DIR=$(pwd -P)
for pid in $(pgrep -f "node|next"); do
  if [ -d /proc/$pid ]; then
    PROC_CWD=$(readlink -f /proc/$pid/cwd 2>/dev/null)
    if [ "$PROC_CWD" = "$CURRENT_DIR" ]; then
      echo "Killing process $pid running in $CURRENT_DIR..."
      kill -9 "$pid" 2>/dev/null
    fi
  fi
done

# 2. Kill any process listening on port 3000
echo "Checking if port $PORT is still in use..."
# Method A: Using ss (very reliable on modern Linux)
SS_PID=$(ss -tulpn 2>/dev/null | grep -E ":$PORT[[:space:]]" | grep -oE "pid=[0-9]+" | cut -d= -f2)
if [ ! -z "$SS_PID" ]; then
  for pid in $SS_PID; do
    echo "Killing process $pid using port $PORT (found via ss)..."
    kill -9 "$pid" 2>/dev/null
  done
  sleep 1
fi

# Method B: Using lsof (fallback/redundancy)
LSOF_PID=$(lsof -t -i:$PORT 2>/dev/null)
if [ ! -z "$LSOF_PID" ]; then
  for pid in $LSOF_PID; do
    echo "Killing process $pid using port $PORT (found via lsof)..."
    kill -9 "$pid" 2>/dev/null
  done
  sleep 1
fi

# 3. Check for .env.local file
if [ ! -f .env.local ]; then
  echo "Creating .env.local placeholder..."
  echo "# Local Environment Variables" > .env.local
  echo "# Add your Supabase or other keys here" >> .env.local
fi

# 4. Install dependencies
echo "Installing dependencies..."
npm install

# 5. Start the development server
echo "Starting Next.js development server..."
echo "=================================================="
echo "👉 You can view the project in your browser at:"
echo "   http://localhost:$PORT"
echo "=================================================="

npm run dev
