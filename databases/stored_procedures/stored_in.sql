-- stored procedure with IN parameter
-- retrieves offices by country

DELIMITER //

CREATE PROCEDURE IF NOT EXISTS GetOfficeByCountry(
	IN countryName VARCHAR(255),
	IN num INT
)

BEGIN
	SELECT * 
	FROM offices
	WHERE country = countryName
	LIMIT num;
END //

DELIMITER ;
