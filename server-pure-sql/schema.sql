DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;

/*
name:
text:
roomname:
createdAt:
*/

/*
CREATE TABLE table_name
(
column_name1 data_type(size),
column_name2 data_type(size),
column_name3 data_type(size),
....
);
*/
CREATE TABLE users (
  id int(10) auto_increment,
  username varchar(255),
  primary key (id),
  unique (username)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id int(10) auto_increment,
  userid int(10),
  text varchar(255),
  roomname varchar(255),
  createdAt datetime,
  primary key (id),
  foreign key (userid) references users(id)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

