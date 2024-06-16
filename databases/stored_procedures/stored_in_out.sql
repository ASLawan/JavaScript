-- stored procedure with INOUT and IN parameters
-- retrieves number of customers by country

DELIMITER //

CREATE PROCEDURE IF NOT EXISTS GetCustomersByCountry(
	INOUT number_of_customers INT,
	IN countryName VARCHAR(255)
)

BEGIN
	SELECT COUNT(country)
	INTO number_of_customers
	FROM customers
	WHERE country = countryName;
END //

DELIMITER ;
