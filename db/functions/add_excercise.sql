CREATE OR REPLACE FUNCTION add_excercise (s_id integer, t_id integer, cnt integer, lbs integer, e_name varchar)
RETURNS integer AS $$
DECLARE
  eid integer;
BEGIN
    -- insert the excercise
    INSERT INTO excercises (type_id,reps,weight,"name") VALUES (t_id,cnt,lbs,e_name) RETURNING id INTO eid;
    -- insert info into join table
    INSERT INTO excercises_sets (excercise_id,set_id) VALUES (eid, s_id);
    -- return id of new excercise
    RETURN eid;
END;
$$ language plpgsql;
