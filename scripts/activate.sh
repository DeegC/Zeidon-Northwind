#!/bin/bash

curl -G --data-urlencode 'qual={
  "OrderId": 10248
}' http://localhost:8080/northwind-jaxrs-1.0/zeidon-api/Northwind/Order
