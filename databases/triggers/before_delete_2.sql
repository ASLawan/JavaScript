-- creates salaries_archives table 

DROP TABLE IF EXISTS salary_archives;

CREATE TABLE salary_archives (
	id INT AUTO_INCREMENT,
	emp_number INT,
	valid_from DATE NOT NULL,
	amount DECIMAL(12, 2) NOT NULL DEFAULT 0,
	delete_at TIMESTAMP DEFAULT NOW(),
	PRIMARY KEY (id, emp_number)
);
