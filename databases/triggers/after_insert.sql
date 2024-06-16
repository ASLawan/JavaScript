-- creates a members table

DROP TABLE IF EXISTS members;

CREATE TABLE members (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(255),
	email VARCHAR(255),
	birth_date DATE
);


DROP TABLE IF EXISTS reminders;

CREATE TABLE reminders(
	id INT NOT NULL AUTO_INCREMENT,
	member_id INT,
	message VARCHAR(255) NOT NULL,
	PRIMARY KEY (id, member_id)
);
