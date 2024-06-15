-- creates a database table employees

CREATE TABLE IF NOT EXISTS employees (
	employee_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	first_name VARCHAR(255) NOT NULL,
	last_name VARCHAR(255) NOT NULL,
	email VARCHAR(255) NOT NULL UNIQUE,
	phone_number VARCHAR(20),
	hire_date DATE NOT NULL,
	salary INT
);
