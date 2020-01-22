select customer.customer_id, first_name, register_date, course_name from customer
JOIN customer_course AS cc ON customer.customer_id = cc.customer_id
JOIN course ON course.course_id = cc.course_id;

