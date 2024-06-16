-- creates a trigger for the sales table

DELIMITER //

CREATE TRIGGER before_sales_update

BEFORE UPDATE

ON sales 

FOR EACH ROW

BEGIN
	DECLARE error_msg VARCHAR(255);

	SET error_msg = CONCAT('The new quantity ', 
		NEW.quantity,
		' cannot be 3 times greater than the current quantity ',
		OLD.quantity);

	IF NEW.quantity > OLD.quantity * 3 THEN
		SIGNAL SQLSTATE '45000'
		SET MESSAGE_TEXT = error_msg;
	END IF;
END //

DELIMITER ;
