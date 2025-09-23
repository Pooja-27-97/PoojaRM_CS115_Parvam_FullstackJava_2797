create database sales_management;
use sales_management;
drop table orders_unf;
create table orders_unf(
	order_id int primary key auto_increment,
    cust_name varchar(50) not null,
    items_quantity varchar(50) not null,
    cust_city varchar(50)
);
desc orders_unf;

insert into orders_unf(cust_name, items_quantity, cust_city)
values
("Alice", "pen-2, book-1", "Mumbai"),
("Bob", "book-3", "Delhi"),
("Alice", "pen-5, pencil-3, book-2", "Mumbai");
select * from orders_unf;

CREATE TABLE orders_1nf (
    order_id INT,
    cust_name VARCHAR(50),
    item_name VARCHAR(50),
    quantity INT,
    cust_city VARCHAR(50)
);
INSERT INTO orders_1nf VALUES
(1, 'Alice', 'pen', 2, 'Mumbai'),
(1, 'Alice', 'book', 1, 'Mumbai'),
(2, 'Bob', 'book', 3, 'Delhi'),
(3, 'Alice', 'pen', 5, 'Mumbai'),
(3, 'Alice', 'pencil', 3, 'Mumbai'),
(3, 'Alice', 'book', 2, 'Mumbai');
select * from orders_1nf;


-- Customers Table
CREATE TABLE customers (
    cust_id INT PRIMARY KEY AUTO_INCREMENT,
    cust_name VARCHAR(50),
    cust_city VARCHAR(50)
);
INSERT INTO customers VALUES
(1, 'Alice', 'Mumbai'),
(2, 'Bob', 'Delhi');
select * from customers;

-- Orders Table
CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    cust_id INT,
    FOREIGN KEY (cust_id) REFERENCES customers(cust_id)
);
INSERT INTO orders VALUES
(1, 1),
(2, 2),
(3, 1);
select * from orders;

-- Order Items Table
CREATE TABLE order_items (
    order_id INT,
    item_name VARCHAR(50),
    quantity INT,
    FOREIGN KEY (order_id) REFERENCES orders(order_id)
);
INSERT INTO order_items VALUES
(1, 'pen', 2),
(1, 'book', 1),
(2, 'book', 3),
(3, 'pen', 5),
(3, 'pencil', 3),
(3, 'book', 2);
select * from order_items;


-- Items Table
CREATE TABLE items (
    item_name VARCHAR(50) PRIMARY KEY,
    price DECIMAL(10,2)
);
INSERT INTO items VALUES
('pen', 10.00),
('book', 100.00),
('pencil', 5.00);
select * from  items;