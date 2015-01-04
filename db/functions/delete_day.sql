CREATE OR REPLACE FUNCTION delete_day (uid integer, did integer)
RETURNS integer AS $$
DECLARE
BEGIN
  did := (SELECT d.id FROM days d WHERE d.user_id = uid AND d.id = did);
  DELETE FROM days d WHERE d.id = did;
  RETURN did;
END;
$$ language plpgsql;
