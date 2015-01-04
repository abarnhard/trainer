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
INSERT INTO users (username,email,password,avatar,token) VALUES ('a2','b2','c','d','e');
INSERT INTO users (username,email,password,avatar,token) VALUES ('a3','b3','c','d','e');
DELETE FROM users;

INSERT INTO users (id,username,email,password,avatar,token) VALUES (1,'bob','bob@aol.com','$2a$08$WY0ZTWQos6v7yaDANVugr.H3y2yzcLPv9Kw97.pxl8WmSYlWEsg6e','https://s3.amazonaws.com/ab-trainer-test/generic_avatar.png','000000000000000000000001');
INSERT INTO users (id,username,email,password,avatar,token) VALUES (2,'alice','alice@aol.com','$2a$08$WY0ZTWQos6v7yaDANVugr.H3y2yzcLPv9Kw97.pxl8WmSYlWEsg6e','https://s3.amazonaws.com/ab-trainer-test/generic_avatar.png','000000000000000000000002');

-- add regime
INSERT INTO regimes (name,user_id) VALUES ('a',1);
INSERT INTO regimes (name,user_id) VALUES ('b',1);
DELETE FROM regimes;
INSERT INTO regimes (id,name,user_id) VALUES (1,'Test Regime 1 - Bob', 1);
INSERT INTO regimes (id,name,user_id) VALUES (2,'Test Regime 2 - Alice', 2);

-- add phases
INSERT INTO phases (name) VALUES ('a1');
INSERT INTO phases (name) VALUES ('a2');
INSERT INTO phases (name) VALUES ('a3');
INSERT INTO phases (name) VALUES ('a4');
DELETE FROM phases;
INSERT INTO phases (id,name) VALUES (1,'Test Phase 1');
INSERT INTO phases (id,name) VALUES (2,'Test Phase 2');
INSERT INTO phases (id,name) VALUES (3,'Test Phase 3');
INSERT INTO phases (id,name) VALUES (4,'Test Phase 4');

-- add phase regime join
INSERT INTO phases_regimes (phase_id,regime_id) VALUES (1,1);
INSERT INTO phases_regimes (phase_id,regime_id) VALUES (2,1);
INSERT INTO phases_regimes (phase_id,regime_id) VALUES (3,1);
INSERT INTO phases_regimes (phase_id,regime_id) VALUES (4,2);

-- add workouts
INSERT INTO workouts (name) VALUES ('a1');
INSERT INTO workouts (name) VALUES ('a2');
INSERT INTO workouts (name) VALUES ('a3');
DELETE FROM workouts;
INSERT INTO workouts (id,name) VALUES (1,'Test Workout 1');
INSERT INTO workouts (id,name) VALUES (2,'Test Workout 2');
INSERT INTO workouts (id,name) VALUES (3,'Test Workout 3');

-- add phase workouts join
INSERT INTO phases_workouts (phase_id,workout_id) VALUES (1,1);
INSERT INTO phases_workouts (phase_id,workout_id) VALUES (1,2);
INSERT INTO phases_workouts (phase_id,workout_id) VALUES (4,3);

-- add sets
INSERT INTO sets (rest,count) VALUES (0,0);
INSERT INTO sets (rest,count) VALUES (0,0);
INSERT INTO sets (rest,count) VALUES (0,0);
INSERT INTO sets (rest,count) VALUES (0,0);
INSERT INTO sets (rest,count) VALUES (0,0);
DELETE FROM sets;
INSERT INTO sets (id,rest,count) VALUES (1,0,1);
INSERT INTO sets (id,rest,count) VALUES (2,90,3);
INSERT INTO sets (id,rest,count) VALUES (3,90,3);
INSERT INTO sets (id,rest,count) VALUES (4,15,1);
INSERT INTO sets (id,rest,count) VALUES (5,120,5);

-- add sets workouts join
INSERT INTO sets_workouts (set_id,workout_id) VALUES (1,1);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (2,1);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (3,2);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (4,2);
INSERT INTO sets_workouts (set_id,workout_id) VALUES (5,3);

-- add exercises
INSERT INTO exercises (type_id,reps,weight,name) VALUES (1,1,1,'a1');
INSERT INTO exercises (type_id,reps,weight,name) VALUES (1,1,1,'a2');
INSERT INTO exercises (type_id,reps,weight,name) VALUES (1,1,1,'a3');
INSERT INTO exercises (type_id,reps,weight,name) VALUES (1,1,1,'a4');
INSERT INTO exercises (type_id,reps,weight,name) VALUES (1,1,1,'a5');
INSERT INTO exercises (type_id,reps,weight,name) VALUES (1,1,1,'a6');
INSERT INTO exercises (type_id,reps,weight,name) VALUES (1,1,1,'a7');
INSERT INTO exercises (type_id,reps,weight,name) VALUES (1,1,1,'a8');
DELETE FROM exercises;
INSERT INTO exercises (id,type_id,reps,weight,name) VALUES (1,1,20,0,'Push-ups');
INSERT INTO exercises (id,type_id,reps,weight,name) VALUES (2,2,15,0,'Sit-ups');
INSERT INTO exercises (id,type_id,reps,weight,name) VALUES (3,3,0,0,'Jumping Jacks');
INSERT INTO exercises (id,type_id,reps,weight,name) VALUES (4,1,15,45,'Bench Press');
INSERT INTO exercises (id,type_id,reps,weight,name) VALUES (5,1,12,50,'Shrugs');
INSERT INTO exercises (id,type_id,reps,weight,name) VALUES (6,1,20,0,'Push-ups');
INSERT INTO exercises (id,type_id,reps,weight,name) VALUES (7,2,15,0,'Sit-ups');
INSERT INTO exercises (id,type_id,reps,weight,name) VALUES (8,3,0,0,'Jumping Jacks');

-- add exercise set join
INSERT INTO exercises_sets (exercise_id,set_id) VALUES (1,1);
INSERT INTO exercises_sets (exercise_id,set_id) VALUES (2,1);
INSERT INTO exercises_sets (exercise_id,set_id) VALUES (3,2);
INSERT INTO exercises_sets (exercise_id,set_id) VALUES (4,2);
INSERT INTO exercises_sets (exercise_id,set_id) VALUES (5,2);
INSERT INTO exercises_sets (exercise_id,set_id) VALUES (6,3);
INSERT INTO exercises_sets (exercise_id,set_id) VALUES (7,4);
INSERT INTO exercises_sets (exercise_id,set_id) VALUES (8,5);

-- add days
INSERT INTO days (start,workout_id,phase_id,user_id) VALUES ('2000-01-01',1,1,1);
INSERT INTO days (start,workout_id,phase_id,user_id) VALUES ('2000-01-01',1,1,1);
INSERT INTO days (start,workout_id,phase_id,user_id) VALUES ('2000-01-01',1,1,1);
DELETE FROM days;
INSERT INTO days (id,start,workout_id,phase_id,user_id) VALUES (1,'2015-01-01',1,1,1);
INSERT INTO days (id,start,workout_id,phase_id,user_id) VALUES (2,'2015-01-02',2,1,1);
INSERT INTO days (id,start,workout_id,phase_id,user_id) VALUES (3,'2015-01-01',3,4,2);
