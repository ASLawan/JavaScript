-- creates a BEFORE INSERT trigger

DELIMITER //

CREATE TRIGGER before_workcenter_insert
BEFORE INSERT
ON work_centers
FOR EACH ROW
	BEGIN
		DECLARE rowcount INT;

		SELECT COUNT(*)
		INTO rowcount
		FROM work_center_stats;

		IF rowcount > 0 THEN
			UPDATE work_center_stats
			SET total_capacity = total_capacity + NEW.capacity;
		ELSE
			INSERT INTO work_center_stats(total_capacity)
			VALUES(NEW.capacity);
		END IF;
	END //

DELIMITER ;
