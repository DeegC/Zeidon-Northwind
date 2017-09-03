#!/bin/bash

#curl -G --data-urlencode 'qual={"oi": {"id":10}}' localhost:4567/
curl -G --data-urlencode 'qual={
  "ProductId": 76
}' $NORTHWIND_SERVER/northwind/Product
