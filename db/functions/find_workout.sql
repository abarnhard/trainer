CREATE OR REPLACE FUNCTION find_workout (w_id integer)
RETURNS TABLE ("workoutId" integer, "workoutName" varchar, "setIds" integer[]) AS $$
DECLARE
BEGIN
  RETURN QUERY
    SELECT w.id AS "workoutId", w.name AS "workoutName", array_agg(distinct s.id) AS "setIds"
    FROM workouts w
    INNER JOIN sets_workouts sw ON sw.workout_id = w.id
    INNER JOIN sets s ON s.id = sw.set_id
    WHERE w.id = w_id
    GROUP BY w.id, w.name;

END;
$$ language plpgsql;
