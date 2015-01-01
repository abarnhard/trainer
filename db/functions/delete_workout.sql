CREATE OR REPLACE FUNCTION delete_workout (uid integer, wid integer)
RETURNS integer AS $$
DECLARE
  set_ids integer[];
  exercise_ids integer[];
BEGIN
  wid := (
    SELECT w.id 
    FROM phases_workouts pw
    INNER JOIN workouts w ON w.id = pw.workout_id
    INNER JOIN phases p ON p.id = pw.phase_id 
    INNER JOIN phases_regimes pr ON pr.phase_id = p.id
    INNER JOIN regimes r ON r.id = pr.regime_id 
    WHERE r.user_id = uid AND w.id = wid
  );
  set_ids := (
    SELECT array_agg(DISTINCT sw.set_id)
    FROM sets_workouts sw
    WHERE sw.workout_id = wid
  );
  exercise_ids := (
    SELECT array_agg(DISTINCT es.exercise_id)
    FROM exercises_sets es
    WHERE es.set_id = any(set_ids)
  );
  
  DELETE FROM days d WHERE d.workout_id = wid;
  DELETE FROM exercises_sets es WHERE es.set_id = any(set_ids);
  DELETE FROM exercises e WHERE e.id = any(exercise_ids);
  DELETE FROM sets_workouts sw WHERE sw.workout_id = wid;
  DELETE FROM sets s WHERE s.id = any(set_ids);
  DELETE FROM phases_workouts pw WHERE pw.workout_id = wid;
  DELETE FROM workouts w WHERE w.id = wid;

  RETURN wid;

END;
$$ language plpgsql;
