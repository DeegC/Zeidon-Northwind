#!/bin/bash

curl -H "Content-Type: application/json" -X POST -d @neworder.json http://localhost:8080/northwind-jaxrs/zeidon-api/Northwind
