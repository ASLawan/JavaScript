 -- creates a salaries table in triggers database

DROP TABLE IF EXISTS salaries;

CREATE TABLE salaries (
	emp_number INT PRIMARY KEY,
	valid_from DATE NOT NULL,
	amount DECIMAL(12, 2) NOT NULL DEFAULT 0
);


