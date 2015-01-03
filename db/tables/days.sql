CREATE TABLE days(
  id serial PRIMARY KEY,
  start date NOT NULL,
  workout_id integer NOT NULL REFERENCES workouts(id),
  phase_id integer NOT NULL REFERENCES phases(id)
);
