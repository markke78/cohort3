CREATE TABLE customer(
customer_id serial PRIMARY KEY,
first_name VARCHAR(50) NOT NULL,
last_name VARCHAR(50) NOT NULL,
email VARCHAR(335) UNIQUE NOT NULL);

