CREATE TABLE excercises(
  id serial PRIMARY KEY,
  name varchar(255) NOT NULL,
  reps integer NOT NULL,
  weight integer NOT NULL,
  type_id integer NOT NULL REFERENCES types(id)
);
