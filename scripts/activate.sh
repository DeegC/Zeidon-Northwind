#!/bin/bash

#curl -G --data-urlencode 'qual={"oi": {"id":10}}' localhost:4567/
curl -G --data-urlencode 'qual={
  "OrderId": 10248
}' $NORTHWIND_SERVER/northwind/Order
