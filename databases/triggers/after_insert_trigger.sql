-- creates AFTER INSERT trigger

DELIMITER //

CREATE TRIGGER after_member_insert

AFTER INSERT

ON members

FOR EACH ROW

BEGIN
	IF NEW.birth_date IS NULL THEN
		INSERT INTO reminders(member_id, message)
		VALUES (NEW.id, CONCAT(
				'Hi ', NEW.name, ', please update your date of birth'));
	END IF;
END //

DELIMITER ;
