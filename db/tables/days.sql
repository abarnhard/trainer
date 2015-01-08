CREATE TABLE days(
  id serial PRIMARY KEY,
  start date NOT NULL,
  completed boolean NOT NULL DEFAULT false,
  workout_id integer NOT NULL REFERENCES workouts(id),
  phase_id integer NOT NULL REFERENCES phases(id),
  user_id integer NOT NULL REFERENCES users(id)
);
