#!/bin/sh

for i in `seq -w 1 25`;
do
  echo "DROP DATABASE guest${i};"
  echo "CREATE DATABASE guest${i};"
  echo "CREATE TABLE guest${i}.data (name VARCHAR(32), value int);"
  echo "INSERT INTO guest${i}.data VALUES ('counter', 0);"
done


