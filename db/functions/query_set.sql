CREATE OR REPLACE FUNCTION query_set (s_id integer)
RETURNS TABLE ("setId" integer, "rest" integer, "count" integer, "exerciseIds" integer[], "exerciseNames" varchar[], "reps" integer[], "weights" integer[], "typeIds" integer[], "types" varchar[]) AS $$
DECLARE
BEGIN
  RETURN QUERY
    SELECT s.id AS "setId", s.rest, s.count, array_agg(e.id) AS "exerciseIds", array_agg(e.name) AS "exerciseNames", array_agg(e.reps) AS "reps", array_agg(e.weight) AS "weights", array_agg(t.id) AS "typeIds", array_agg(t.type) AS "types"
    FROM exercises_sets es
    INNER JOIN sets s ON s.id = es.set_id
    INNER JOIN exercises e ON e.id = es.exercise_id
    INNER JOIN "types" t ON t.id = e.type_id
    WHERE es.set_id = s_id
    GROUP BY s.id, s.rest, s.count;
END;
$$ language plpgsql;
