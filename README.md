## HIIT It
### Code Badges
[![Build Status](https://travis-ci.org/ABarnhard/trainer.svg)](https://travis-ci.org/ABarnhard/trainer)
[![Coverage Status](https://coveralls.io/repos/ABarnhard/trainer/badge.png)](https://coveralls.io/r/ABarnhard/trainer)

### Screenshots
![Image1](https://raw.githubusercontent.com/nss-cohort-2014-06-07/express-template/master/docs/screenshots/one.jpg)
![Image2](https://raw.githubusercontent.com/nss-cohort-2014-06-07/express-template/master/docs/screenshots/two.jpg)

### Description
HIIT workout app to be used with the companion mobile application.

### Models
```
Schedule
```

```
User
```

```
Workout
```

### Database
```
days
id
start
completed
workout_id
phase_id
user_id
```

```
exercises
id
name
reps
weight
type_id
```

```
exercises_sets
exercise_id
set_id
```

```
phases
id
name
user_id
```

```
phases_regimes
phase_id
regime_id
```

```
phases_workouts
phase_id
workout_id
```

```
regimes
id
name
user_id
```

```
sets
id
rest
count
```

```
sets_workouts
set_id
workout_id
```

```
types
id
type
```

```
users
id
username
email
password
avatar
token
created_at
```

```
workouts
id
name
```

### Contributors
- [Adam Barnhard](https://github.com/abarnhard)

### License
[MIT](LICENSE)