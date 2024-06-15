-- create a trigger for employees table
-- updates employees salary column

DELIMITER //

CREATE TRIGGER salary_updt BEFORE INSERT ON employees
FOR EACH ROW
BEGIN
	IF NEW.salary > 300000 THEN
		SET NEW.salary = NEW.salary + 20000;
	ELSE
		SET NEW.salary = NEW.salary + 10000;
	END IF;

END //


DELIMITER ;
