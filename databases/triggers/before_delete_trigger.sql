-- creates BEFORE DELETE TRIGGER for the salaries table

DELIMITER //

CREATE TRIGGER before_salaries_delete

BEFORE DELETE

ON salaries

FOR EACH ROW

BEGIN
	INSERT INTO salary_archives(emp_number, valid_from, amount)
	VALUES (OLD.emp_number, OLD.valid_from, OLD.amount);

END //

DELIMITER ;
