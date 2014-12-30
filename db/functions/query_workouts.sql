CREATE OR REPLACE FUNCTION query_workouts (u_id integer, p_id integer)
RETURNS TABLE ("id" integer, "name" varchar) AS $$
DECLARE
BEGIN
  RETURN QUERY
    SELECT p.id, p.name
    FROM phases_regimes pr
    INNER JOIN phases p ON p.id = pr.phase_id
    INNER JOIN regimes r ON r.id = pr.regime_id
    WHERE r.user_id = u_id AND r.id = r_id
    ORDER BY p.name;

END;
$$ language plpgsql;
