CREATE DATABASE IF NOT EXISTS burger;
USE burger;

CREATE TABLE burgers
(
id INT AUTO_INCREMENT,
burger_name VARCHAR(255) NOT NULL,
eaten BOOLEAN NOT NULL,
PRIMARY KEY (id)
);