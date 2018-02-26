#!/bin/bash

# Start Ruby's IRB with JRuby and automatically create a Northwind task.

DEBUG_PORT=8000
DEBUG_FLAGS="-J-Xrunjdwp:transport=dt_socket,address=$DEBUG_PORT,server=y,suspend=n"

while getopts "bcdxp:" option; do
    case $option in
        c)
            echo "Removing .tmpclasspath"
            rm .tmpclasspath > /dev/null
            ;;
        d)
	    echo "Debug mode will be started with suspend=y"
	    DEBUG_FLAGS="-Xrunjdwp:transport=dt_socket,address=$DEBUG_PORT,server=y,suspend=y"
            ;;
        p)
            echo "Using DEBUG_PORT=$OPTARG"
            DEBUG_PORT="$OPTARG"
            ;;
        x)
            echo "Starting with debug in suspend mode"
            DEBUG_FLAGS="-Xrunjdwp:transport=dt_socket,address=$DEBUG_PORT,server=y,suspend=y"
            ;;
    esac
done

#
# Create a temp file with the classpath.
#

# If the temp file exists and is > 24 hours old delete it so we can recreate it.
if [ -f .tmpclasspath ]; then
    if test "`find .tmpclasspath -mmin +1440`"; then
        echo ".tmpclasspath is old and will be regenerated"
        rm .tmpclasspath
    fi
fi

if [ -f .tmpclasspath ]; then
    echo "Using cached classpath (.tmpclasspath)"
else
    echo "Generating classpath..."
    gradle classpath > /dev/null

    # Change classpath to use resources source instead of build to make it easier to reload
    # zeidon xods.
    sed -i  's/zeidon\/build\/resources\/main/zeidon\/src\/main\/resources/g' .tmpclasspath
    
    # Prepend classpath with current directory to pick up jar-bootstrap.rb
    echo -e ".:../conf:$(cat .tmpclasspath)" > .tmpclasspath
fi

echo "Starting jirb"
export SQLITE_DIR=../conf
jruby -J-cp $(cat .tmpclasspath) $DEBUG_FLAGS -J-Djline.inputrc=~/.jline.inputrc -S irb -r ./jirb-startup.rb
