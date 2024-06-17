-- stored procedure with variable declaration

DELIMITER //

CREATE PROCEDURE IF NOT EXISTS GetTotalOrder()
BEGIN
	DECLARE totalOrder INT DEFAULT 0;

	SELECT COUNT(*)
	INTO totalOrder
	FROM orders;

	SELECT totalOrder;
END //

DELIMITER ;