-- creates table sales changes 

DROP TABLE IF EXISTS sales_changes;

CREATE TABLE sales_changes (
	id INT AUTO_INCREMENT PRIMARY KEY,
	sales_id INT,
	quantity_before INT,
	quantity_after INT,
	changed_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);



