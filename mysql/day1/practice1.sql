create database order_management;
use order_management;

create table orders(
	order_id int auto_increment primary key,
    customer_name varchar(100) Not null,
    product_name varchar(100) Not null,
    quantity int not null,
    price decimal(10,2) not null,
    order_date date not null,
    status varchar(20) default 'pending'
);

INSERT INTO orders (customer_name, product_name, quantity, price, order_date, status) VALUES
('Alice Johnson', 'Wireless Mouse', 2, 19.99, '2025-09-10', 'shipped'),
('Bob Smith', 'Bluetooth Headphones', 1, 49.99, '2025-09-12', 'delivered'),
('Catherine Lee', 'USB-C Charger', 3, 14.50, '2025-09-13', 'pending'),
('David Kim', 'Mechanical Keyboard', 1, 89.99, '2025-09-14', 'processing'),
('Emily Zhang', '27-inch Monitor', 1, 199.99, '2025-09-15', 'cancelled'),
('Frank Wright', 'Webcam 1080p', 2, 39.00, '2025-09-16', 'shipped'),
('Grace Liu', 'External Hard Drive 1TB', 1, 59.95, '2025-09-17', 'pending'),
('Henry Brown', 'Laptop Stand', 2, 24.99, '2025-09-18', 'processing'),
('Isla Martinez', 'Portable Speaker', 1, 34.99, '2025-09-19', 'delivered'),
('Jack Thompson', 'Smartphone Case', 4, 9.99, '2025-09-20', 'pending');


select * from orders;
-- highest price
select * from orders order by price desc limit 1;
-- 2nd highest price
select * from orders order by price desc limit 1 offset 1;
select * from orders order by price desc;

-- display which all are containing given data 
select * from orders where status in('processing', 'delivered', 'pending');

select count(*) from orders;
select max(price) from orders;
select min(price) from orders;
select avg(price) from orders;
select count(*) ,price from orders group by price;