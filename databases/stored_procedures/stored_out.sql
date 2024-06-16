-- stored procedure with IN and OUT parameters
-- counts orders by status

DELIMITER //

CREATE PROCEDURE IF NOT EXISTS GetOrderCountByStatus(
	IN orderStatus VARCHAR(255),
	OUT total INT
)

BEGIN
	SELECT COUNT(orderNumber)
	INTO total
	FROM orders
	WHERE status = orderStatus;
END //

DELIMITER ;
