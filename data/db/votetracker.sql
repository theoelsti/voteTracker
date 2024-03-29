CREATE DATABASE IF NOT EXISTS voteTracker;
USE voteTracker;
CREATE TABLE users (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    is_admin int not null DEFAULT 0
)
CREATE TABLE exports (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    date DATE NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    exortname VARCHAR(255) NOT NULL,
    state INT NOT NULL DEFAULT 0
)
