#!/bin/bash

if [ -z "$1" ] ; then
  echo "Enter a database name"
  exit 1
fi

psql $1 -f ../../db/tables/users.sql
psql $1 -f ../../db/tables/regimes.sql
psql $1 -f ../../db/tables/phases.sql
psql $1 -f ../../db/tables/phases_regimes.sql
psql $1 -f ../../db/tables/workouts.sql
psql $1 -f ../../db/tables/sets.sql
psql $1 -f ../../db/tables/sets_workouts.sql
psql $1 -f ../../db/tables/days.sql
psql $1 -f ../../db/tables/types.sql
psql $1 -f ../../db/tables/excercises.sql
psql $1 -f ../../db/tables/excercises_sets.sql

psql $1 -f ../../db/functions/add_phase.sql
psql $1 -f ../../db/functions/query_phases.sql
