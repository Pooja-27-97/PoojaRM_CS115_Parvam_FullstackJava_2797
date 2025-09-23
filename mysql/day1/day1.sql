-- database creation
show databases;
create database student_managment;
use student_managment;

create table students(
	std_id int primary key,
    std_name varchar(30),
    std_roll int,
    std_email varchar(40)
);

insert into students(std_id, std_name, std_roll, std_email)
values (27, "Muzan", 215, "Muzan@gmail.com");

-- fetching data
select * from students;
select std_name, std_email from students;

-- alternating tables

alter table students
add column std_class_room varchar(10);

alter table students
add column std_class_room varchar(10) default 'cs103';

alter table students
drop column std_class_room;

-- to get structure of data
desc students;