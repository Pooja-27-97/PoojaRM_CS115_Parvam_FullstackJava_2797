create database anime;
use anime;

create table characters(
	Char_id int primary key,
	Char_name varchar(20),
    Char_age int,
    Char_role varchar(20)
);

insert into characters(Char_id, Char_name, Char_age, Char_role)
values
(27, "Ryomen Sukuna", 1000, "King of Curse"),
(34, "Muzan", 27, "Creator of Demons"),
(97, "Loid Foger", 29, "A Spy"),
(65, "Ramil", 200, "Vampire");


select * from characters;
select Char_name, Char_role from characters; 

select * from characters limit 3;
select * from characters
where Char_age > 30;

-- offset and limit in pagination
select *from characters
limit 2 offset 2;


alter table characters
add column Anime_name varchar(30);

desc characters;

alter table characters
add column Country varchar(20) default 'Japan';

-- update values
update characters
set Anime_name = "Jujutsukaisen"
where Char_id = 27;

update characters
set Anime_name = "Demon Sayler"
where Char_id = 34;

update characters
set Anime_name = "Vampire Daries"
where Char_id = 65;

update characters
set Anime_name = "Spy * Family"
where Char_id = 97;

delete from characters where Char_id = 65;
-- delete every rows and create new table
truncate characters;

-- delete table
drop table characters;

-- drop database
drop database anime;

-- current database
select database();