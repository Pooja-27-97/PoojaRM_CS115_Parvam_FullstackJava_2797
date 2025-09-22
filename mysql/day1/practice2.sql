create database employee_management;
use employee_management;

create table employee(
	emp_id bigint primary key,
    emp_name varchar(20) not null,
    job_title varchar(20) not null,
    phone_no bigint,
    salary decimal(10,2) not null,
    dept_id bigint,
    project_id bigint,
    foreign key (dept_id) references department(dept_id),
    foreign key (project_id) references project(proj_id)
);

insert employee(emp_id, emp_name, job_title, phone_no, salary, dept_id, project_id)
values
(1, "Loid Foger", "Developer", 546498465, 30000.00, 1, 2),
(2, "Yor Foger", "Manager", 545466145, 50000.00, 2, 2);
select * from employee;

create table department(
    dept_id bigint primary key auto_increment,
    dept_name varchar(30) not null
);

insert into department(dept_name) values ("IT"),("Non IT");
select * from department;

create table project(
    proj_id bigint primary key auto_increment,
    proj_name varchar(30) not null
);

insert into project(proj_name) values ("erp"),("crm");
select * from project;