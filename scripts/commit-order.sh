#!/bin/bash

curl -H "Content-Type: application/json" -X POST -d @neworder.json $NORTHWIND_SERVER/northwind/Order
