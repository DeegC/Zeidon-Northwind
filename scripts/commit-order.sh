#!/bin/bash

curl -H "Content-Type: application/json" -X POST -d @order1.json $NORTHWIND_SERVER/northwind/Order
