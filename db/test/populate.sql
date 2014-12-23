/*
INSERT INTO users (username,password,avatar,token) VALUES ('a1','b','c','d');
INSERT INTO users (username,password,avatar,token) VALUES ('a2','b','c','d');
INSERT INTO users (username,password,avatar,token) VALUES ('a3','b','c','d');
DELETE FROM users;

INSERT INTO users (id,username,password,avatar,token) VALUES (1,'bob','$2a$08$nCUsVXX7i7kMK7IuFIQMOOhZR4MGOlRSTd7aWL01jO7JsEiPGPUAW','https://s3.amazonaws.com/adam-evernote-test/token/avatar.png','token');

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
