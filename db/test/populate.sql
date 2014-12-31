-- add workout types
INSERT INTO types ("type") VALUES ('secs');
INSERT INTO types ("type") VALUES ('reps');
INSERT INTO types ("type") VALUES ('fail');
DELETE FROM types;
INSERT INTO types (id,"type") VALUES (1,'secs');
INSERT INTO types (id,"type") VALUES (2,'reps');
INSERT INTO types (id,"type") VALUES (3,'fail');

-- add user
INSERT INTO users (username,email,password,avatar,token) VALUES ('a1','b1','c','d','e');
INSERT INTO users (username,email,password,avatar,token) VALUES ('a2','b2','c','d','e');
INSERT INTO users (username,email,password,avatar,token) VALUES ('a3','b3','c','d','e');
DELETE FROM users;

INSERT INTO users (id,username,email,password,avatar,token) VALUES (1,'bob','bob@aol.com','$2a$08$WY0ZTWQos6v7yaDANVugr.H3y2yzcLPv9Kw97.pxl8WmSYlWEsg6e','https://s3.amazonaws.com/ab-trainer-test/generic_avatar.png','000000000000000000000001');

/*
INSERT INTO notes (title, body, user_id) values ('a1', 'b', 1);
INSERT INTO notes (title, body, user_id) values ('a2', 'b', 1);
INSERT INTO notes (title, body, user_id) values ('a3', 'b', 1);
DELETE FROM notes;

INSERT INTO notes (id,title, body, user_id) VALUES (1,'title1','body1',1);

INSERT INTO tags (name) values ('a1');
INSERT INTO tags (name) values ('a2');
INSERT INTO tags (name) values ('a3');
DELETE FROM tags;

INSERT INTO tags (id,name) VALUES (1,'a');
INSERT INTO tags (id,name) VALUES (2,'b');

INSERT INTO notes_tags (note_id,tag_id) VALUES (1,1);
INSERT INTO notes_tags (note_id,tag_id) VALUES (1,2);
*/
