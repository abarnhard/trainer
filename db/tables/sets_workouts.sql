CREATE TABLE sets_workouts(
  set_id integer NOT NULL REFERENCES sets(id),
  workout_id integer NOT NULL REFERENCES workouts(id)
);
