CREATE OR REPLACE FUNCTION add_set (w_id integer, s_count integer, s_rest integer)
RETURNS integer AS $$
DECLARE
  sid integer;
BEGIN
    -- insert the phase
    INSERT INTO sets (rest,count) VALUES (s_rest,s_count) RETURNING id INTO sid;
    -- insert info into join table
    INSERT INTO sets_workouts (set_id, workout_id) VALUES (sid, w_id);
    -- return id of new phase
    RETURN sid;
END;
$$ language plpgsql;
