#!/bin/sh
# executor-image/run.sh

set -e

CPP_FILE="/sandbox/main.cpp"
BINARY="/sandbox/program"
CPP_STD="${CPP_STD:-c++17}"
TIMEOUT="${EXEC_TIMEOUT:-10}"

# Compile phase
g++ -std=${CPP_STD} -O2 -Wall -Wextra \
    -o "${BINARY}" "${CPP_FILE}" 2>&1

if [ $? -ne 0 ]; then
    echo "COMPILE_ERROR" >&2
    exit 1
fi

# Execute phase with timeout
exec timeout "${TIMEOUT}s" "${BINARY}"