CREATE OR REPLACE FUNCTION get_day (u_id integer, sday date)
RETURNS TABLE (id integer, "start" date, "title" text, "allDay" boolean) AS $$
DECLARE
BEGIN
  RETURN QUERY
    SELECT d.id, d.start, p.name || ' - ' || w.name AS "title", true AS "allDay"
    FROM days d
    INNER JOIN workouts w ON d.workout_id = w.id
    INNER JOIN phases p ON d.phase_id = p.id
    WHERE d.user_id = u_id AND d.start = sday;
END;
$$ language plpgsql;
