#!/bin/bash

if [ -z "$1" ] ; then
  echo "Enter a database name"
  exit 1
fi

psql $1 -f ../../db/test/delete.sql
./create-db.sh $1
psql $1 -f ../../db/production/populate.sql
