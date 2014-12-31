/*
CREATE OR REPLACE FUNCTION query_workouts (u_id integer, p_id integer)
RETURNS TABLE ("workoutId" integer, "workoutName" varchar) AS $$
DECLARE
BEGIN
  p_id := (SELECT p.id FROM phases_regimes pr INNER JOIN phases p ON p.id = pr.phase_id INNER JOIN regimes r ON r.id = pr.regime_id WHERE r.user_id = u_id AND p.id = p_id);
  RETURN QUERY
    SELECT *
    FROM phases_workouts pw
    INNER JOIN workouts w ON w.id = pw.workout_id
    INNER JOIN sets_workouts sw ON sw.workout_id = w.id
    INNER JOIN sets s ON s.id = sw.set_id
    INNER JOIN excercises_sets es ON es.set_id = s.id
    INNER JOIN excercises e ON e.id = es.excercise_id
    INNER JOIN "types" t ON t.id = e.type_id
    WHERE pw.phase_id = 1; -- p_id

END;
$$ language plpgsql;
*/
-- SELECT * FROM query_workouts(1,1);