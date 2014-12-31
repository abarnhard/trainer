CREATE TABLE phases_workouts(
  phase_id integer NOT NULL REFERENCES phases(id),
  workout_id integer NOT NULL REFERENCES workouts(id)
);
