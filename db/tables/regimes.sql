CREATE TABLE regimes(
  id serial PRIMARY KEY,
  name varchar(255) UNIQUE NOT NULL,
  user_id integer NOT NULL REFERENCES users(id)
);
