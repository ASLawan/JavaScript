-- creates a database table

DROP TABLE IF EXISTS sales;

CREATE TABLE sales (
	id INT AUTO_INCREMENT,
	product VARCHAR(100) NOT NULL,
	quantity INT NOT NULL DEFAULT 0,
	fiscal_year SMALLINT NOT NULL,
	fiscal_month TINYINT NOT NULL,
	CHECK(fiscal_month >= 1 AND fiscal_month <= 12),
	CHECK(fiscal_year BETWEEN 2000 and 2050),
	CHECK(quantity >= 0),
	UNIQUE(product, fiscal_year, fiscal_month),
	PRIMARY KEY(id)
);
