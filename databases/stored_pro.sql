-- stored procedure example

DELIMITER $$

CREATE PROCEDURE list_db()
BEGIN
	SELECT * FROM users;
ENd $$

DELIMITER ;
