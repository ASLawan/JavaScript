-- create a database table salaries

DROP TABLE IF EXISTS salaries;

CREATE TABLE salaries (
	emp_number INT PRIMARY KEY,
	salary DECIMAL(10, 2) NOT NULL DEFAULT 0
);


