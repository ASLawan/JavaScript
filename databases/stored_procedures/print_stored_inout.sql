-- prints output from GetOrderCountByStatus procedure

SET @Custoners_from_USA = 0;
SET @Customers_from_Australia = 0;
SET @Customers_from_Spain = 0;
SET @Customers_from_Italy = 0;

CALL GetCustomersByCountry(@Customers_from_USA, 'USA');
CALL GetCustomersByCountry(@Customers_from_Australia, 'Australia');
CALL GetCustomersByCountry(@Customers_from_Spain, 'Spain');
CALL GetCustomersByCountry(@Customers_from_Italy, 'Italy');



SELECT @Customers_from_USA;
SELECT @Customers_from_Australia;
SELECT @Customers_from_Spain;
SELECT @Customers_from_Italy;
