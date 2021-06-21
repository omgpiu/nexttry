CREATE DATABASE IF NOT EXISTS blog;
USE blog;
CREATE TABLE IF NOT EXISTS posts(
id INT UNSIGNED AUTO_INCREMENT,
title VARCHAR(255) NOT NULL,
content TEXT NOT NULL,
PRIMARY KEY(id)
);
INSERT INTO posts (id,title,content)
VALUES (3,"Using the Serverless Framework WIth AWS", "LOREM IPSUM");