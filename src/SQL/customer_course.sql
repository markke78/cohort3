CREATE TABLE customer_course(
registration_id serial PRIMARY KEY,
customer_id integer NOT NULL,
course_id integer NOT NULL,
register_date TIMESTAMP NOT NULL);

