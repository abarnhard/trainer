CREATE OR REPLACE FUNCTION query_phases (u_id integer, r_id integer)
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
