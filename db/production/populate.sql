-- add workout types
INSERT INTO types ("type") VALUES ('a1');
INSERT INTO types ("type") VALUES ('b1');
INSERT INTO types ("type") VALUES ('c1');
DELETE FROM types;
INSERT INTO types (id,"type") VALUES (1,'reps');
INSERT INTO types (id,"type") VALUES (2,'secs');
INSERT INTO types (id,"type") VALUES (3,'fail');

-- add user
INSERT INTO users (username,email,password,avatar,token) VALUES ('a1','b1','c','d','e');
DELETE FROM users;
INSERT INTO users (id,username,email,password,avatar,token) VALUES (1,'bob','bob@aol.com','$2a$08$WY0ZTWQos6v7yaDANVugr.H3y2yzcLPv9Kw97.pxl8WmSYlWEsg6e','https://s3.amazonaws.com/ab-trainer-test/generic_avatar.png','000000000000000000000001');

-- add regime
INSERT INTO regimes (name,user_id) VALUES ('a',1);
DELETE FROM regimes;
INSERT INTO regimes (id,name,user_id) VALUES (1,'HIIT It',1);

-- add phases
INSERT INTO phases (name,user_id) VALUES ('a1',1);
INSERT INTO phases (name,user_id) VALUES ('a2',1);
INSERT INTO phases (name,user_id) VALUES ('a3',1);
INSERT INTO phases (name,user_id) VALUES ('a4',1);
DELETE FROM phases;
INSERT INTO phases (id,name,user_id) VALUES (1,'Phase 1',1);
INSERT INTO phases (id,name,user_id) VALUES (2,'Phase 2',1);
INSERT INTO phases (id,name,user_id) VALUES (3,'Phase 3',1);
INSERT INTO phases (id,name,user_id) VALUES (4,'Phase 4',1);

-- add phase regime join
INSERT INTO phases_regimes (phase_id,regime_id) VALUES (1,1);
INSERT INTO phases_regimes (phase_id,regime_id) VALUES (2,1);
INSERT INTO phases_regimes (phase_id,regime_id) VALUES (3,1);
INSERT INTO phases_regimes (phase_id,regime_id) VALUES (4,1);

-- add workouts
INSERT INTO workouts (name) VALUES ('a');
INSERT INTO workouts (name) VALUES ('a');
INSERT INTO workouts (name) VALUES ('a');
INSERT INTO workouts (name) VALUES ('a');
INSERT INTO workouts (name) VALUES ('a');
INSERT INTO workouts (name) VALUES ('a');
INSERT INTO workouts (name) VALUES ('a');
INSERT INTO workouts (name) VALUES ('a');
INSERT INTO workouts (name) VALUES ('a');
INSERT INTO workouts (name) VALUES ('a');
INSERT INTO workouts (name) VALUES ('a');
INSERT INTO workouts (name) VALUES ('a');
INSERT INTO workouts (name) VALUES ('a');
INSERT INTO workouts (name) VALUES ('a');
INSERT INTO workouts (name) VALUES ('a');
INSERT INTO workouts (name) VALUES ('a');
INSERT INTO workouts (name) VALUES ('a');
INSERT INTO workouts (name) VALUES ('a');
INSERT INTO workouts (name) VALUES ('a');
INSERT INTO workouts (name) VALUES ('a');
INSERT INTO workouts (name) VALUES ('a');
DELETE FROM workouts;
-- phase 1
INSERT INTO workouts (id,name) VALUES (1, 'Day 1');
INSERT INTO workouts (id,name) VALUES (2, 'Day 2');
INSERT INTO workouts (id,name) VALUES (3, 'Day 3');
INSERT INTO workouts (id,name) VALUES (4, 'Day 4');
-- phase 2
INSERT INTO workouts (id,name) VALUES (5, 'Day 1');
INSERT INTO workouts (id,name) VALUES (6, 'Day 2');
INSERT INTO workouts (id,name) VALUES (7, 'Day 3');
INSERT INTO workouts (id,name) VALUES (8, 'Day 4');
-- phase 3
INSERT INTO workouts (id,name) VALUES (9, 'Day 1');
INSERT INTO workouts (id,name) VALUES (10,'Day 2');
INSERT INTO workouts (id,name) VALUES (11,'Day 3');
-- phase 4
INSERT INTO workouts (id,name) VALUES (12,'Day 1');
INSERT INTO workouts (id,name) VALUES (13,'Day 2');
INSERT INTO workouts (id,name) VALUES (14,'Day 3');
INSERT INTO workouts (id,name) VALUES (15,'Day 4');
INSERT INTO workouts (id,name) VALUES (16,'Day 5');
INSERT INTO workouts (id,name) VALUES (17,'Day 6');
INSERT INTO workouts (id,name) VALUES (18,'Day 7');
INSERT INTO workouts (id,name) VALUES (19,'Day 8');
INSERT INTO workouts (id,name) VALUES (20,'Day 9');
INSERT INTO workouts (id,name) VALUES (21,'Day 10');

-- add phase workouts join
INSERT INTO phases_workouts (phase_id,workout_id) VALUES (1,1);
INSERT INTO phases_workouts (phase_id,workout_id) VALUES (1,2);
INSERT INTO phases_workouts (phase_id,workout_id) VALUES (1,3);
INSERT INTO phases_workouts (phase_id,workout_id) VALUES (1,4);
INSERT INTO phases_workouts (phase_id,workout_id) VALUES (2,5);
INSERT INTO phases_workouts (phase_id,workout_id) VALUES (2,6);
INSERT INTO phases_workouts (phase_id,workout_id) VALUES (2,7);
INSERT INTO phases_workouts (phase_id,workout_id) VALUES (2,8);
INSERT INTO phases_workouts (phase_id,workout_id) VALUES (3,9);
INSERT INTO phases_workouts (phase_id,workout_id) VALUES (3,10);
INSERT INTO phases_workouts (phase_id,workout_id) VALUES (3,11);
INSERT INTO phases_workouts (phase_id,workout_id) VALUES (4,12);
INSERT INTO phases_workouts (phase_id,workout_id) VALUES (4,13);
INSERT INTO phases_workouts (phase_id,workout_id) VALUES (4,14);
INSERT INTO phases_workouts (phase_id,workout_id) VALUES (4,15);
INSERT INTO phases_workouts (phase_id,workout_id) VALUES (4,16);
INSERT INTO phases_workouts (phase_id,workout_id) VALUES (4,17);
INSERT INTO phases_workouts (phase_id,workout_id) VALUES (4,18);
INSERT INTO phases_workouts (phase_id,workout_id) VALUES (4,19);
INSERT INTO phases_workouts (phase_id,workout_id) VALUES (4,20);
INSERT INTO phases_workouts (phase_id,workout_id) VALUES (4,21);

-- add sets
INSERT INTO sets (rest,count) VALUES (1, 0);
INSERT INTO sets (rest,count) VALUES (2, 0);
INSERT INTO sets (rest,count) VALUES (3, 0);
INSERT INTO sets (rest,count) VALUES (4, 0);
INSERT INTO sets (rest,count) VALUES (5, 0);
INSERT INTO sets (rest,count) VALUES (6, 0);
INSERT INTO sets (rest,count) VALUES (7, 0);
INSERT INTO sets (rest,count) VALUES (8, 0);
INSERT INTO sets (rest,count) VALUES (9, 0);
INSERT INTO sets (rest,count) VALUES (10,0);
INSERT INTO sets (rest,count) VALUES (11,0);
INSERT INTO sets (rest,count) VALUES (12,0);
INSERT INTO sets (rest,count) VALUES (13,0);
INSERT INTO sets (rest,count) VALUES (14,0);
INSERT INTO sets (rest,count) VALUES (15,0);
INSERT INTO sets (rest,count) VALUES (16,0);
INSERT INTO sets (rest,count) VALUES (17,0);
INSERT INTO sets (rest,count) VALUES (18,0);
INSERT INTO sets (rest,count) VALUES (19,0);
INSERT INTO sets (rest,count) VALUES (20,0);
INSERT INTO sets (rest,count) VALUES (21,0);
INSERT INTO sets (rest,count) VALUES (22,0);
INSERT INTO sets (rest,count) VALUES (23,0);
INSERT INTO sets (rest,count) VALUES (24,0);
INSERT INTO sets (rest,count) VALUES (25,0);
INSERT INTO sets (rest,count) VALUES (26,0);
INSERT INTO sets (rest,count) VALUES (27,0);
INSERT INTO sets (rest,count) VALUES (28,0);
INSERT INTO sets (rest,count) VALUES (29,0);
INSERT INTO sets (rest,count) VALUES (30,0);
INSERT INTO sets (rest,count) VALUES (31,0);
INSERT INTO sets (rest,count) VALUES (32,0);
INSERT INTO sets (rest,count) VALUES (33,0);
INSERT INTO sets (rest,count) VALUES (34,0);
INSERT INTO sets (rest,count) VALUES (35,0);
INSERT INTO sets (rest,count) VALUES (36,0);
INSERT INTO sets (rest,count) VALUES (37,0);
INSERT INTO sets (rest,count) VALUES (38,0);
INSERT INTO sets (rest,count) VALUES (39,0);
INSERT INTO sets (rest,count) VALUES (40,0);
INSERT INTO sets (rest,count) VALUES (41,0);
INSERT INTO sets (rest,count) VALUES (42,0);
INSERT INTO sets (rest,count) VALUES (43,0);
INSERT INTO sets (rest,count) VALUES (44,0);
INSERT INTO sets (rest,count) VALUES (45,0);
INSERT INTO sets (rest,count) VALUES (46,0);
INSERT INTO sets (rest,count) VALUES (47,0);
INSERT INTO sets (rest,count) VALUES (48,0);
INSERT INTO sets (rest,count) VALUES (49,0);
INSERT INTO sets (rest,count) VALUES (50,0);
INSERT INTO sets (rest,count) VALUES (51,0);
INSERT INTO sets (rest,count) VALUES (52,0);
INSERT INTO sets (rest,count) VALUES (53,0);
INSERT INTO sets (rest,count) VALUES (54,0);
INSERT INTO sets (rest,count) VALUES (55,0);
INSERT INTO sets (rest,count) VALUES (56,0);
INSERT INTO sets (rest,count) VALUES (57,0);
INSERT INTO sets (rest,count) VALUES (58,0);
INSERT INTO sets (rest,count) VALUES (59,0);
INSERT INTO sets (rest,count) VALUES (60,0);
INSERT INTO sets (rest,count) VALUES (61,0);
INSERT INTO sets (rest,count) VALUES (62,0);
INSERT INTO sets (rest,count) VALUES (63,0);
INSERT INTO sets (rest,count) VALUES (64,0);
INSERT INTO sets (rest,count) VALUES (65,0);
INSERT INTO sets (rest,count) VALUES (66,0);
INSERT INTO sets (rest,count) VALUES (67,0);
INSERT INTO sets (rest,count) VALUES (68,0);
INSERT INTO sets (rest,count) VALUES (69,0);
INSERT INTO sets (rest,count) VALUES (70,0);
INSERT INTO sets (rest,count) VALUES (71,0);
INSERT INTO sets (rest,count) VALUES (72,0);
INSERT INTO sets (rest,count) VALUES (73,0);
INSERT INTO sets (rest,count) VALUES (74,0);
INSERT INTO sets (rest,count) VALUES (75,0);
INSERT INTO sets (rest,count) VALUES (76,0);
INSERT INTO sets (rest,count) VALUES (77,0);
INSERT INTO sets (rest,count) VALUES (78,0);
INSERT INTO sets (rest,count) VALUES (79,0);
INSERT INTO sets (rest,count) VALUES (80,0);
INSERT INTO sets (rest,count) VALUES (81,0);
INSERT INTO sets (rest,count) VALUES (82,0);
INSERT INTO sets (rest,count) VALUES (83,0);
INSERT INTO sets (rest,count) VALUES (84,0);
INSERT INTO sets (rest,count) VALUES (85,0);
INSERT INTO sets (rest,count) VALUES (86,0);
INSERT INTO sets (rest,count) VALUES (87,0);
INSERT INTO sets (rest,count) VALUES (88,0);
INSERT INTO sets (rest,count) VALUES (89,0);
INSERT INTO sets (rest,count) VALUES (90,0);
INSERT INTO sets (rest,count) VALUES (91,0);
INSERT INTO sets (rest,count) VALUES (92,0);
INSERT INTO sets (rest,count) VALUES (93,0);
INSERT INTO sets (rest,count) VALUES (94,0);
INSERT INTO sets (rest,count) VALUES (95,0);
INSERT INTO sets (rest,count) VALUES (96,0);
INSERT INTO sets (rest,count) VALUES (97,0);
DELETE FROM sets;
-- phase 1 / day 1 (workout 1)
INSERT INTO sets (id,rest,count) VALUES (1,0, 1);
INSERT INTO sets (id,rest,count) VALUES (2,90,3);
INSERT INTO sets (id,rest,count) VALUES (3,90,2);
INSERT INTO sets (id,rest,count) VALUES (4,90,2);
INSERT INTO sets (id,rest,count) VALUES (5,90,2);
INSERT INTO sets (id,rest,count) VALUES (6,90,1);
INSERT INTO sets (id,rest,count) VALUES (7,15,4);
-- phase 1 / day 2 (workout 2)
INSERT INTO sets (id,rest,count) VALUES (8, 0, 1);
INSERT INTO sets (id,rest,count) VALUES (9, 90,2);
INSERT INTO sets (id,rest,count) VALUES (10,90,2);
INSERT INTO sets (id,rest,count) VALUES (11,90,2);
INSERT INTO sets (id,rest,count) VALUES (12,90,2);
INSERT INTO sets (id,rest,count) VALUES (13,30,3);
INSERT INTO sets (id,rest,count) VALUES (14,90,4);
-- phase 1 / day 3 (workout 3)
INSERT INTO sets (id,rest,count) VALUES (15,90,10);
-- phase 1 / day 4 (workout 4)
INSERT INTO sets (id,rest,count) VALUES (16,90,10);/*
-- phase 2 / day 1 (workout 5)
INSERT INTO sets (id,rest,count) VALUES (17, 0,1);
INSERT INTO sets (id,rest,count) VALUES (18,90,4);
INSERT INTO sets (id,rest,count) VALUES (19,90,3);
INSERT INTO sets (id,rest,count) VALUES (20,90,3);
INSERT INTO sets (id,rest,count) VALUES (21,90,3);
INSERT INTO sets (id,rest,count) VALUES (22,90,4);
INSERT INTO sets (id,rest,count) VALUES (23,15,3);
-- phase 2 / day 2 (workout 6)
INSERT INTO sets (id,rest,count) VALUES (24, 0,1);
INSERT INTO sets (id,rest,count) VALUES (25, 0,1);
INSERT INTO sets (id,rest,count) VALUES (26,90,5);
INSERT INTO sets (id,rest,count) VALUES (27,90,6);
INSERT INTO sets (id,rest,count) VALUES (28,20,3);
INSERT INTO sets (id,rest,count) VALUES (29,20,3);
-- phase 2 / day 3 (workout 7)
INSERT INTO sets (id,rest,count) VALUES (30, 0,1);
INSERT INTO sets (id,rest,count) VALUES (31,90,3);
INSERT INTO sets (id,rest,count) VALUES (32,90,5);
INSERT INTO sets (id,rest,count) VALUES (33,90,3);
INSERT INTO sets (id,rest,count) VALUES (34,20,4);
-- phase 2 / day 4 (workout 8)
INSERT INTO sets (id,rest,count) VALUES (35,90,10);
-- phase 3 / day 1 (workout 9)
INSERT INTO sets (id,rest,count) VALUES (36, 0,1);
INSERT INTO sets (id,rest,count) VALUES (37,90,5);
INSERT INTO sets (id,rest,count) VALUES (38,90,5);
INSERT INTO sets (id,rest,count) VALUES (39,90,5);
INSERT INTO sets (id,rest,count) VALUES (40, 0,1);
-- phase 3 / day 2 (workout 10)
INSERT INTO sets (id,rest,count) VALUES (41, 0,1);
INSERT INTO sets (id,rest,count) VALUES (42,90,6);
INSERT INTO sets (id,rest,count) VALUES (43,90,6);
INSERT INTO sets (id,rest,count) VALUES (44,90,5);
INSERT INTO sets (id,rest,count) VALUES (45,90,5);
INSERT INTO sets (id,rest,count) VALUES (46,15,4);
-- phase 3 / day 3 (workout 11)
INSERT INTO sets (id,rest,count) VALUES (47, 0,1);
INSERT INTO sets (id,rest,count) VALUES (48,90,5);
INSERT INTO sets (id,rest,count) VALUES (49,90,5);
INSERT INTO sets (id,rest,count) VALUES (50,90,1);
-- phase 4 / day 1 (workout 12)
INSERT INTO sets (id,rest,count) VALUES (51, 0,1);
INSERT INTO sets (id,rest,count) VALUES (52,60,4);
INSERT INTO sets (id,rest,count) VALUES (53,60,3);
INSERT INTO sets (id,rest,count) VALUES (54,60,4);
INSERT INTO sets (id,rest,count) VALUES (55,60,3);
INSERT INTO sets (id,rest,count) VALUES (56,20,8);
-- phase 4 / day 2 (workout 13)
INSERT INTO sets (id,rest,count) VALUES (57, 0,1);
INSERT INTO sets (id,rest,count) VALUES (58,60,3);
INSERT INTO sets (id,rest,count) VALUES (59,60,3);
INSERT INTO sets (id,rest,count) VALUES (60,60,3);
INSERT INTO sets (id,rest,count) VALUES (61,60,4);
INSERT INTO sets (id,rest,count) VALUES (62,60,3);
INSERT INTO sets (id,rest,count) VALUES (63,60,3);
-- phase 4 / day 3 (workout 14)
INSERT INTO sets (id,rest,count) VALUES (64, 0,1);
INSERT INTO sets (id,rest,count) VALUES (65,60,5);
INSERT INTO sets (id,rest,count) VALUES (66,60,5);
INSERT INTO sets (id,rest,count) VALUES (67,60,1);
INSERT INTO sets (id,rest,count) VALUES (68,20,6);
-- phase 4 / day 4 (workout 15)
INSERT INTO sets (id,rest,count) VALUES (69, 0,1);
INSERT INTO sets (id,rest,count) VALUES (70,60,3);
INSERT INTO sets (id,rest,count) VALUES (71,60,4);
INSERT INTO sets (id,rest,count) VALUES (72,20,6);
-- phase 4 / day 5 (workout 16)
INSERT INTO sets (id,rest,count) VALUES (73,60,5);
-- phase 4 / day 6 (workout 17)
INSERT INTO sets (id,rest,count) VALUES (74, 0,1);
INSERT INTO sets (id,rest,count) VALUES (75,60,4);
INSERT INTO sets (id,rest,count) VALUES (76,60,3);
INSERT INTO sets (id,rest,count) VALUES (77,60,3);
INSERT INTO sets (id,rest,count) VALUES (78,60,1);
INSERT INTO sets (id,rest,count) VALUES (79,60,3);
-- phase 4 / day 7 (workout 18)
INSERT INTO sets (id,rest,count) VALUES (80, 0,1);
INSERT INTO sets (id,rest,count) VALUES (81,60,3);
INSERT INTO sets (id,rest,count) VALUES (82,60,3);
INSERT INTO sets (id,rest,count) VALUES (83,60,3);
INSERT INTO sets (id,rest,count) VALUES (84,60,4);
INSERT INTO sets (id,rest,count) VALUES (85,60,4);
INSERT INTO sets (id,rest,count) VALUES (86,20,4);
-- phase 4 / day 8 (workout 19)
INSERT INTO sets (id,rest,count) VALUES (87, 0,1);
INSERT INTO sets (id,rest,count) VALUES (88,60,4);
INSERT INTO sets (id,rest,count) VALUES (89,60,4);
INSERT INTO sets (id,rest,count) VALUES (90,60,4);
INSERT INTO sets (id,rest,count) VALUES (91,20,6);
-- phase 4 / day 9 (workout 20)
INSERT INTO sets (id,rest,count) VALUES (92, 0,1);
INSERT INTO sets (id,rest,count) VALUES (93,60,5);
INSERT INTO sets (id,rest,count) VALUES (94,60,1);
INSERT INTO sets (id,rest,count) VALUES (95,20,5);
INSERT INTO sets (id,rest,count) VALUES (96,20,6);
-- phase 4 / day 10 (workout 21)
INSERT INTO sets (id,rest,count) VALUES (97,60,5);
*/
-- add sets workouts join
INSERT INTO sets_workouts (set_id,workout_id) VALUES (1, 1);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (2, 1);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (3, 1);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (4, 1);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (5, 1);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (6, 1);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (7, 1);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (8, 2);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (9, 2);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (10,2);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (11,2);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (12,2);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (13,2);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (14,2);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (15,3);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (16,4);/*
INSERT INTO sets_workouts (set_id,workout_id) VALUES (17,5);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (18,5);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (19,5);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (20,5);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (21,5);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (22,5);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (23,5);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (24,6);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (25,6);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (26,6);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (27,6);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (28,6);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (29,6);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (30,7);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (31,7);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (32,7);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (33,7);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (34,7);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (35,8);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (36,9);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (37,9);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (38,9);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (39,9);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (40,9);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (41,10);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (42,10);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (43,10);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (44,10);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (45,10);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (46,10);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (47,11);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (48,11);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (49,11);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (50,11);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (51,12);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (52,12);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (53,12);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (54,12);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (55,12);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (56,12);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (57,13);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (58,13);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (59,13);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (60,13);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (61,13);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (62,13);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (63,13);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (64,14);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (65,14);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (66,14);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (67,14);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (68,14);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (69,15);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (70,15);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (71,15);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (72,15);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (73,16);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (74,17);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (75,17);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (76,17);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (77,17);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (78,17);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (79,17);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (80,18);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (81,18);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (82,18);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (83,18);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (84,18);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (85,18);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (86,18);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (87,19);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (88,19);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (89,19);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (90,19);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (91,19);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (92,20);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (93,20);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (94,20);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (95,20);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (96,20);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (97,21);
*/
-- add exercises
INSERT INTO exercises (type_id,reps,weight,name) VALUES (1, 1,1,'a');
INSERT INTO exercises (type_id,reps,weight,name) VALUES (1, 2,1,'a');
INSERT INTO exercises (type_id,reps,weight,name) VALUES (1, 3,1,'a');
INSERT INTO exercises (type_id,reps,weight,name) VALUES (1, 4,1,'a');
INSERT INTO exercises (type_id,reps,weight,name) VALUES (1, 5,1,'a');
INSERT INTO exercises (type_id,reps,weight,name) VALUES (1, 6,1,'a');
INSERT INTO exercises (type_id,reps,weight,name) VALUES (1, 7,1,'a');
INSERT INTO exercises (type_id,reps,weight,name) VALUES (1, 8,1,'a');
INSERT INTO exercises (type_id,reps,weight,name) VALUES (1, 9,1,'a');
INSERT INTO exercises (type_id,reps,weight,name) VALUES (1,10,1,'a');
INSERT INTO exercises (type_id,reps,weight,name) VALUES (1,11,1,'a');
INSERT INTO exercises (type_id,reps,weight,name) VALUES (1,12,1,'a');
INSERT INTO exercises (type_id,reps,weight,name) VALUES (1,13,1,'a');
INSERT INTO exercises (type_id,reps,weight,name) VALUES (1,14,1,'a');
INSERT INTO exercises (type_id,reps,weight,name) VALUES (1,15,1,'a');
INSERT INTO exercises (type_id,reps,weight,name) VALUES (1,16,1,'a');
INSERT INTO exercises (type_id,reps,weight,name) VALUES (1,17,1,'a');
INSERT INTO exercises (type_id,reps,weight,name) VALUES (1,18,1,'a');
INSERT INTO exercises (type_id,reps,weight,name) VALUES (1,19,1,'a');
INSERT INTO exercises (type_id,reps,weight,name) VALUES (1,20,1,'a');
INSERT INTO exercises (type_id,reps,weight,name) VALUES (1,21,1,'a');
INSERT INTO exercises (type_id,reps,weight,name) VALUES (1,22,1,'a');
INSERT INTO exercises (type_id,reps,weight,name) VALUES (1,23,1,'a');
INSERT INTO exercises (type_id,reps,weight,name) VALUES (1,24,1,'a');
INSERT INTO exercises (type_id,reps,weight,name) VALUES (1,25,1,'a');
INSERT INTO exercises (type_id,reps,weight,name) VALUES (1,26,1,'a');
INSERT INTO exercises (type_id,reps,weight,name) VALUES (1,27,1,'a');
INSERT INTO exercises (type_id,reps,weight,name) VALUES (1,28,1,'a');
INSERT INTO exercises (type_id,reps,weight,name) VALUES (1,29,1,'a');
INSERT INTO exercises (type_id,reps,weight,name) VALUES (1,30,1,'a');
INSERT INTO exercises (type_id,reps,weight,name) VALUES (1,31,1,'a');
INSERT INTO exercises (type_id,reps,weight,name) VALUES (1,32,1,'a');
DELETE FROM exercises;
-- phase 1 / day 1 (workout 1, Sets 1 - 7)
INSERT INTO exercises (id,type_id,reps,weight,name) VALUES (1, 1,20, 0,'Warm up with: Push Ups');
INSERT INTO exercises (id,type_id,reps,weight,name) VALUES (2, 1,12,45,'Flat Bench press');
INSERT INTO exercises (id,type_id,reps,weight,name) VALUES (3, 1,12,45,'Bent over Barbell Row');
INSERT INTO exercises (id,type_id,reps,weight,name) VALUES (4, 1,12,45,'Seated Military Press');
INSERT INTO exercises (id,type_id,reps,weight,name) VALUES (5, 1,15,45,'Standing Barbell Shrugs');
INSERT INTO exercises (id,type_id,reps,weight,name) VALUES (6, 1,12,45,'Standing Barbell Curls');
INSERT INTO exercises (id,type_id,reps,weight,name) VALUES (7, 3, 0, 0,'Seated Body Weight Dips');
INSERT INTO exercises (id,type_id,reps,weight,name) VALUES (8, 1,15,45,'Barbell Squat');
INSERT INTO exercises (id,type_id,reps,weight,name) VALUES (9, 1,15,45,'Stiff Dead Lifts');
INSERT INTO exercises (id,type_id,reps,weight,name) VALUES (10,1,20, 0,'Standing Calf Raises');
INSERT INTO exercises (id,type_id,reps,weight,name) VALUES (11,2,90,25,'Running In Place (Weighted)');
INSERT INTO exercises (id,type_id,reps,weight,name) VALUES (12,2,15, 0,'Decline Sit-Ups');
-- phase 1 / day 2 (workout 2, Sets 8 - 14)
INSERT INTO exercises (id,type_id,reps,weight,name) VALUES (13,2,20,0, 'Warm up with: Jumping Jacks');
INSERT INTO exercises (id,type_id,reps,weight,name) VALUES (14,1,12,25,'Incline Dumbbell Chest Press');
INSERT INTO exercises (id,type_id,reps,weight,name) VALUES (15,1,12,0, 'Wide Chin Ups');
INSERT INTO exercises (id,type_id,reps,weight,name) VALUES (16,1,12,25,'Standing Dumbbell Shoulder Press');
INSERT INTO exercises (id,type_id,reps,weight,name) VALUES (17,1,15,25,'Standing Dumbbell Shrugs');
INSERT INTO exercises (id,type_id,reps,weight,name) VALUES (18,1,12,25,'Seated Dumbbell Curls (Both arms)');
INSERT INTO exercises (id,type_id,reps,weight,name) VALUES (19,1,12,25,'Seated dumbbell overhead ext');
INSERT INTO exercises (id,type_id,reps,weight,name) VALUES (20,1,20,25,'Dumbbell Walking Lunges');
INSERT INTO exercises (id,type_id,reps,weight,name) VALUES (21,1,12,25,'Dumbbell Stiff Leg Dead Lift');
INSERT INTO exercises (id,type_id,reps,weight,name) VALUES (22,1,30,0, '3-Position Calf Raises (One position per set)');
INSERT INTO exercises (id,type_id,reps,weight,name) VALUES (23,1,20,0, 'Bicycle Crunch');
INSERT INTO exercises (id,type_id,reps,weight,name) VALUES (24,2,30,0, 'Mountain Climbers');
-- phase 1 / day 3 (workout 3, Set 15)
INSERT INTO exercises (id,type_id,reps,weight,name) VALUES (25,2,20,0,'Body Weight Squats');
INSERT INTO exercises (id,type_id,reps,weight,name) VALUES (26,2,20,0,'Dynamic Push-Ups');
INSERT INTO exercises (id,type_id,reps,weight,name) VALUES (27,2,20,0,'Prone Cobras');
INSERT INTO exercises (id,type_id,reps,weight,name) VALUES (28,2,20,0,'Jumping Jacks');
INSERT INTO exercises (id,type_id,reps,weight,name) VALUES (29,2,20,0,'Mountain Climbers');
-- phase 1 / day 4 (workout 4, Set 16)
INSERT INTO exercises (id,type_id,reps,weight,name) VALUES (30,2,20,0,'High Knees');
INSERT INTO exercises (id,type_id,reps,weight,name) VALUES (31,2,20,0,'Half Burpees');
INSERT INTO exercises (id,type_id,reps,weight,name) VALUES (32,2,20,0,'Reverse Crunch');

-- add exercise set join
-- phase 1 / day 1 (workout 1, Sets 1 - 7)
INSERT INTO exercises_sets (exercise_id,set_id) VALUES (1, 1);
INSERT INTO exercises_sets (exercise_id,set_id) VALUES (2, 2);
INSERT INTO exercises_sets (exercise_id,set_id) VALUES (3, 2);
INSERT INTO exercises_sets (exercise_id,set_id) VALUES (4, 3);
INSERT INTO exercises_sets (exercise_id,set_id) VALUES (5, 3);
INSERT INTO exercises_sets (exercise_id,set_id) VALUES (6, 4);
INSERT INTO exercises_sets (exercise_id,set_id) VALUES (7, 4);
INSERT INTO exercises_sets (exercise_id,set_id) VALUES (8, 5);
INSERT INTO exercises_sets (exercise_id,set_id) VALUES (9, 5);
INSERT INTO exercises_sets (exercise_id,set_id) VALUES (10,6);
INSERT INTO exercises_sets (exercise_id,set_id) VALUES (11,6);
INSERT INTO exercises_sets (exercise_id,set_id) VALUES (12,7);
-- phase 1 / day 2 (workout 2, Sets 8 - 14)
INSERT INTO exercises_sets (exercise_id,set_id) VALUES (13,8);
INSERT INTO exercises_sets (exercise_id,set_id) VALUES (14,9);
INSERT INTO exercises_sets (exercise_id,set_id) VALUES (15,9);
INSERT INTO exercises_sets (exercise_id,set_id) VALUES (16,10);
INSERT INTO exercises_sets (exercise_id,set_id) VALUES (17,10);
INSERT INTO exercises_sets (exercise_id,set_id) VALUES (18,11);
INSERT INTO exercises_sets (exercise_id,set_id) VALUES (19,11);
INSERT INTO exercises_sets (exercise_id,set_id) VALUES (20,12);
INSERT INTO exercises_sets (exercise_id,set_id) VALUES (21,12);
INSERT INTO exercises_sets (exercise_id,set_id) VALUES (22,13);
INSERT INTO exercises_sets (exercise_id,set_id) VALUES (23,14);
INSERT INTO exercises_sets (exercise_id,set_id) VALUES (24,14);
-- phase 1 / day 3 (workout 3, Set 15)
INSERT INTO exercises_sets (exercise_id,set_id) VALUES (25,15);
INSERT INTO exercises_sets (exercise_id,set_id) VALUES (26,15);
INSERT INTO exercises_sets (exercise_id,set_id) VALUES (27,15);
INSERT INTO exercises_sets (exercise_id,set_id) VALUES (28,15);
INSERT INTO exercises_sets (exercise_id,set_id) VALUES (29,15);
-- phase 1 / day 4 (workout 4, Set 16)
INSERT INTO exercises_sets (exercise_id,set_id) VALUES (30,16);
INSERT INTO exercises_sets (exercise_id,set_id) VALUES (31,16);
INSERT INTO exercises_sets (exercise_id,set_id) VALUES (32,16);


-- add days
INSERT INTO days (start,workout_id,phase_id,user_id) VALUES ('2000-01-01',1,1,1);
INSERT INTO days (start,workout_id,phase_id,user_id) VALUES ('2000-01-01',1,1,1);
INSERT INTO days (start,workout_id,phase_id,user_id) VALUES ('2000-01-01',1,1,1);
INSERT INTO days (start,workout_id,phase_id,user_id) VALUES ('2000-01-01',1,1,1);
INSERT INTO days (start,workout_id,phase_id,user_id) VALUES ('2000-01-01',1,1,1);
INSERT INTO days (start,workout_id,phase_id,user_id) VALUES ('2000-01-01',1,1,1);
INSERT INTO days (start,workout_id,phase_id,user_id) VALUES ('2000-01-01',1,1,1);
INSERT INTO days (start,workout_id,phase_id,user_id) VALUES ('2000-01-01',1,1,1);
INSERT INTO days (start,workout_id,phase_id,user_id) VALUES ('2000-01-01',1,1,1);
INSERT INTO days (start,workout_id,phase_id,user_id) VALUES ('2000-01-01',1,1,1);
INSERT INTO days (start,workout_id,phase_id,user_id) VALUES ('2000-01-01',1,1,1);
INSERT INTO days (start,workout_id,phase_id,user_id) VALUES ('2000-01-01',1,1,1);
DELETE FROM days;
INSERT INTO days (id,start,workout_id,phase_id,user_id) VALUES (1,'2015-01-06',1,1,1);
INSERT INTO days (id,start,workout_id,phase_id,user_id) VALUES (2,'2015-01-07',2,1,1);
INSERT INTO days (id,start,workout_id,phase_id,user_id) VALUES (3,'2015-01-08',3,1,1);
INSERT INTO days (id,start,workout_id,phase_id,user_id) VALUES (4,'2015-01-09',4,1,1);
INSERT INTO days (id,start,workout_id,phase_id,user_id) VALUES (5,'2015-01-10',1,1,1);
INSERT INTO days (id,start,workout_id,phase_id,user_id) VALUES (6,'2015-01-11',2,1,1);
INSERT INTO days (id,start,workout_id,phase_id,user_id) VALUES (7,'2015-01-12',3,1,1);
INSERT INTO days (id,start,workout_id,phase_id,user_id) VALUES (8,'2015-01-13',4,1,1);
INSERT INTO days (id,start,workout_id,phase_id,user_id) VALUES (9,'2015-01-14',1,1,1);
INSERT INTO days (id,start,workout_id,phase_id,user_id) VALUES (10,'2015-01-15',2,1,1);
INSERT INTO days (id,start,workout_id,phase_id,user_id) VALUES (11,'2015-01-16',3,1,1);
INSERT INTO days (id,start,workout_id,phase_id,user_id) VALUES (12,'2015-01-17',4,1,1);
