CREATE OR REPLACE FUNCTION add_phase (u_id integer, r_id integer, p_name varchar)
RETURNS integer AS $$
DECLARE
  pid integer;
  rid integer;
BEGIN
  -- check is user owns the regime
  rid := (SELECT id FROM regimes WHERE regimes.user_id=u_id AND regimes.id=r_id);
  IF rid IS null
  THEN
    RETURN 0;
  ELSE
    -- insert the phase
    INSERT INTO phases ("name") VALUES (p_name) returning id into pid;
    -- if that works, insert info into join table
    INSERT INTO phases_regimes (phase_id, regime_id) VALUES (pid, r_id);
    -- return id of new phase
    RETURN pid;
  END IF;
END;
$$ language plpgsql;
