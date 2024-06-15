-- sanitizes input data before insertion to the database
-- trims whitespaces
-- sets pay_class input to uppercase

DELIMITER //

CREATE TRIGGER trim_input 
BEFORE INSERT 
ON employees
FOR EACH ROW
	BEGIN
		SET NEW.first_name = TRIM(NEW.first_name);
		SET NEW.last_name = TRIM(NEW.last_name);
		SET NEW.pay_class = UPPER(NEW.pay_class);
	END //

DELIMITER ;
