-- creates a AFTER UPDATE trigger for the sales table

DELIMITER //

CREATE TRIGGER after_sales_update

AFTER UPDATE

ON sales

FOR EACH ROW

BEGIN
	IF OLD.quantity <> NEW.quantity THEN
		INSERT INTO sales_changes(sales_id, quantity_before, quantity_after) VALUES(OLD.id, OLD.quantity, NEW.quantity);

	END IF;
END //

DELIMITER ;
