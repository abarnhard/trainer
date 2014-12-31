CREATE OR REPLACE FUNCTION add_workout (w_name varchar, p_id integer)
RETURNS integer AS $$
DECLARE
  wid integer;
BEGIN
    -- insert the phase
    INSERT INTO workouts ("name") VALUES (w_name) returning id into wid;
    -- insert info into join table
    INSERT INTO phases_workouts (phase_id, workout_id) VALUES (p_id, wid);
    -- return id of new phase
    RETURN wid;
END;
$$ language plpgsql;
