CREATE TABLE exercises_sets(
  set_id integer NOT NULL REFERENCES sets(id),
  exercise_id integer NOT NULL REFERENCES exercises(id)
);
