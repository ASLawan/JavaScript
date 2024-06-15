-- stored procedure that takes one OUT parameter

DELIMITER //

CREATE PROCEDURE my_proc_out(OUT fan_base INT)
BEGIN
	SELECT MAX(fans) INTO fan_base FROM metal_bands;
END //

DELIMITER ;
