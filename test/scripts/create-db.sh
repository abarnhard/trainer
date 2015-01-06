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
psql $1 -f ../../db/tables/phases_workouts.sql
psql $1 -f ../../db/tables/sets.sql
psql $1 -f ../../db/tables/sets_workouts.sql
psql $1 -f ../../db/tables/days.sql
psql $1 -f ../../db/tables/types.sql
psql $1 -f ../../db/tables/exercises.sql
psql $1 -f ../../db/tables/exercises_sets.sql

psql $1 -f ../../db/functions/add_exercise.sql
psql $1 -f ../../db/functions/add_phase.sql
psql $1 -f ../../db/functions/add_set.sql
psql $1 -f ../../db/functions/add_workout.sql
psql $1 -f ../../db/functions/delete_day.sql
psql $1 -f ../../db/functions/delete_workout.sql
psql $1 -f ../../db/functions/find_workout.sql
psql $1 -f ../../db/functions/get_day.sql
psql $1 -f ../../db/functions/query_phases.sql
psql $1 -f ../../db/functions/query_workouts.sql
psql $1 -f ../../db/functions/query_workout_by_day.sql
psql $1 -f ../../db/functions/query_set.sql
psql $1 -f ../../db/functions/query_schedule.sql
