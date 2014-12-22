CREATE TABLE users(
  id serial PRIMARY KEY,
  username varchar(255) UNIQUE NOT NULL,
  email varchar(255) UNIQUE NOT NULL,
  password char(60) NOT NULL,
  avatar varchar(255) NOT NULL,
  token char(24) NOT NULL,
  created_at timestamp NOT NULL DEFAULT now()
);
