CREATE TABLE excercises_sets(
  set_id integer NOT NULL REFERENCES sets(id),
  excercise_id integer NOT NULL REFERENCES excercises(id)
);
