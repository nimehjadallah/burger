Create DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(
	id INTEGER auto_increment NOT NULL,
    burger_name VARCHAR(100),
    devoured BOOLEAN DEFAULT false,
    primary key(id)
    );