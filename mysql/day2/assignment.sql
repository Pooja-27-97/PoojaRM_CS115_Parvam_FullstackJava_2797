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

create table cust_order(
	cust_id int primary key auto_increment,
    cust_name varchar(30) not null,
    cust_city varchar(30) not null
);
insert into cust_order(cust_name, cust_city)
values
("Alice","Mumbai"),
("Bob","Delhi");


drop table item_quantity;
create table item_quantity(
	cust_id int primary key,
    item_name varchar(20) not null,
    item_quant int
);

insert into item_quantity(cust_id, item_name, item_quant)
values
(1,"pen",2),
(1,"book",1),
(2,"book",3),
(3,"pen",5),
(3,"pencil", 3),
(3,"book", 2);
select * from item_quantity;