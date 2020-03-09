#!/bin/bash
 
case "$1" in
  dev)
    echo 'Starting...'
    export DEBUG=courier:*
    nodemon index.js $ENV
  ;;
  testdev)
    export DEBUG=courier:*
    export LOGGER_LEVEL=debug
    export NODE_ENV=test
    export NODE_PATH=./server
    nodemon --exec mocha
  ;;
  *)
    echo "Usage: {start|test|build}"
    exit 1
  ;;
esac
