#!/bin/bash

curl -H "Content-Type: application/json" -X POST -d @neworder-single.json $NORTHWIND_SERVER/northwind/Order
