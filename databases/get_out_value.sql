-- returns the out value from a stored procedure

SET @Largest_fan_base = 0;

CALL my_proc_out(@Largest_fan_base);

SELECT @Largest_fan_base;
