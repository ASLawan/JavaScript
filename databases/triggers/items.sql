-- creates table items and inserts data into the table


CREATE TABLE IF NOT EXISTS items (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
	price DECIMAL(10, 2)
);


INSERT INTO items(name, price) VALUES ('item_one', 100.00), ('item_two', 200.00), ('item_three', 300.00), ('item_four', 400.00);
