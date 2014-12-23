CREATE TABLE phases_regimes(
  phase_id integer NOT NULL REFERENCES phases(id),
  regime_id integer NOT NULL REFERENCES regimes(id)
);