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
CREATE TABLE messages (
  /* Describe your table here.*/
  username varchar(255),
  text varchar(255),
  roomname varchar(255),
  createdAt datetime
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

