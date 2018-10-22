create table user(
    id BIGINT AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(32) NOT NULL,
    profession VARCHAR(50) NOT NULL,
    PRIMARY KEY(id)
);