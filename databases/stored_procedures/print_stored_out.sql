-- prints output from GetOrderCountByStatus procedure

SET @Shipped_orders = 0;
SET @On_hold_orders = 0;
SET @In_process_orders = 0;
SET @Disputed_orders = 0;

CALL GetOrderCountByStatus('shipped', @Shipped_orders);
CALL GetOrderCountByStatus('on hold', @On_hold_orders);
CALL GetOrderCountByStatus('in process', @In_process_orders);
CALL GetOrderCountByStatus('disputed', @Disputed_orders);

SELECT @Shipped_orders;
SELECT @On_hold_orders;
SELECT @In_process_orders;
SELECT @Disputed_orders;
