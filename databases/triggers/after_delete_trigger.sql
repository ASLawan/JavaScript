-- creates AFTER DELETE  TRIGGER

DELIMITER //

CREATE TRIGGER after_salaries_delete

AFTER DELETE

ON salaries 

FOR EACH ROW
	BEGIN
		UPDATE salary_budgets
		SET total = total - OLD.salary;
	END //


DELIMITER ;
