#!/bin/bash

mysqldump --skip-extended-insert --compact  northwind > /tmp/northwind.dump
awk -f mysql2sqlite.awk /tmp/northwind.dump | sqlite3 ../conf/northwind.sqlite
