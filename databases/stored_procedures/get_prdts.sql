-- stored procedure that retrieves all products from
-- products table

DELIMITER //

CREATE PROCEDURE IF NOT EXISTS GetAllProducts()
BEGIN
	SELECT * FROM products;
END //

DELIMITER ;
