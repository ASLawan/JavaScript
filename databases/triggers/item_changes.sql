-- creates database table item_changes

CREATE TABLE IF NOT EXISTS item_changes(
	change_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	item_id INT,
	change_type VARCHAR(10),
	change_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (item_id) REFERENCES items(id)
);
