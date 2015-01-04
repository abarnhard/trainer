CREATE OR REPLACE FUNCTION query_workout_by_day (d_id integer)
RETURNS TABLE ("workoutId" integer, "workoutName" varchar, "setIds" integer[]) AS $$
DECLARE
BEGIN
  RETURN QUERY
    SELECT w.id AS "workoutId", w.name AS "workoutName", array_agg(distinct s.id) AS "setIds"
    FROM days d
    INNER JOIN workouts w ON w.id = d.workout_id
    INNER JOIN sets_workouts sw ON sw.workout_id = w.id
    INNER JOIN sets s ON s.id = sw.set_id
    WHERE d.id = d_id
    GROUP BY w.id, w.name;

END;
$$ language plpgsql;
