-- add user
INSERT INTO users (username,email,password,avatar,token) VALUES ('a1','b1','c','d','e');
DELETE FROM users;
INSERT INTO users (id,username,email,password,avatar,token) VALUES (1,'bob','bob@aol.com','$2a$08$WY0ZTWQos6v7yaDANVugr.H3y2yzcLPv9Kw97.pxl8WmSYlWEsg6e','https://s3.amazonaws.com/ab-trainer-test/generic_avatar.png','000000000000000000000001');

-- add regime
INSERT INTO regimes (name,user_id) VALUES ('a',1);
DELETE FROM regimes;
INSERT INTO regimes (id,name,user_id) VALUES (1,'Sixpack Shortcuts', 1);

-- add phases
INSERT INTO phases (name) VALUES ('a1');
INSERT INTO phases (name) VALUES ('a2');
INSERT INTO phases (name) VALUES ('a3');
INSERT INTO phases (name) VALUES ('a4');
DELETE FROM phases;
INSERT INTO phases (id,name) VALUES (1,'Phase 1');
INSERT INTO phases (id,name) VALUES (2,'Phase 2');
INSERT INTO phases (id,name) VALUES (3,'Phase 3');
INSERT INTO phases (id,name) VALUES (4,'Phase 4');

-- add phase regime join
INSERT INTO phases_regimes (phase_id,regime_id) VALUES (1,1);
INSERT INTO phases_regimes (phase_id,regime_id) VALUES (2,1);
INSERT INTO phases_regimes (phase_id,regime_id) VALUES (3,1);
INSERT INTO phases_regimes (phase_id,regime_id) VALUES (4,1);

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
