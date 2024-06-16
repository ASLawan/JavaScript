-- implements a BEFFORE INSERT trigger

DROP TABLE IF EXISTS work_centers;

CREATE TABLE work_centers(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(100) NOT NULL,
	capacity INT NOT NULL
);


DROP TABLE IF EXISTS work_center_stats;

CREATE TABLE work_center_stats (
	total_capacity INT NOT NULL
);
