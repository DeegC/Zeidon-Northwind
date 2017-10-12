#!/bin/bash

JETTY_RUNNER=$(find jetty -name jetty-runner*)
UTC_WAR=$(find build -name northwind-server*.war)
PORT=8080

JETTY_DEBUG=
if [ "$1" == "-d" ]; then
    JETTY_DEBUG="-Xdebug -agentlib:jdwp=transport=dt_socket,address=8000,server=y,suspend=n"
fi

java -ea -Xmx50m $JETTY_DEBUG -DSQLITE_DIR=$(pwd)/../conf -jar $JETTY_RUNNER --port $PORT --classes $(pwd)/../conf $UTC_WAR | tee /tmp/northwind-scalatra.log
