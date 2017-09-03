#!/bin/bash

curl -d 'qual={
  "ProductId": 76
}' $NORTHWIND_SERVER/northwind/Product/dropLock
