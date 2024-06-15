-- stored procedure with one input argument

DELIMITER //

CREATE PROCEDURE my_proc_in (IN var1 INT)
BEGIN
	SELECT band_name FROM metal_bands LIMIT var1;
END //

DELIMITER ;
