'use strict';

var bcrypt  = require('bcrypt'),
    AWS     = require('aws-sdk'),
    path    = require('path'),
    Mongo   = require('mongodb'),
    concat  = require('concat-stream'),
    pg      = require('../lib/postgres');

function User(obj){
  this.username = obj.username;
  this.email    = obj.email;
  this.password = bcrypt.hashSync(obj.password, 8);
  this.token    = Mongo.ObjectID().toString();
  this.avatar   = avatarUrl(this.token, obj.file);
}

User.register = function(obj, cb){
  if(obj.password.length < 4){return cb('ERROR: PASSWORD LENGTH LESS THAN 4', null);}

  var user   = new User(obj),
      query  = 'INSERT INTO users (username, email, password, avatar, token) VALUES ($1, $2, $3, $4, $5) RETURNING id',
      params = [user.username, user.email, user.password, user.avatar, user.token];
  // console.log(user.token);

  pg.query(query, params, function(err, results){
    if(err){return cb(err, null);}

    var userObject = {id:results.rows[0].id, username: user.username, email:user.email, avatar: user.avatar};

    console.log(userObject);

    if(!obj.file){return cb(null, userObject);}

    uploadToS3(user.token, obj.file, function(err, etag){
      if(err){return cb(err, null);}
      // console.log(err, etag, results.rows[0].id);
      cb(null, userObject);
    });
  });
};

User.login = function(obj, cb){
  pg.query('SELECT * FROM users WHERE email = $1 LIMIT 1', [obj.email], function(err, results){
    if(err || !results.rowCount){return cb(err || 'ERROR: INVALID CREDENTIALS');}

    var isAuth = bcrypt.compareSync(obj.password, results.rows[0].password);
    if(!isAuth){return cb('ERROR: INVALID CREDENTIALS');}

    var user = results.rows[0],
        userObject = {id:user.id, username: user.username, email:user.email, avatar: user.avatar};

    cb(userObject);
  });
};

module.exports = User;

// HELPER FUNCTIONS //
function avatarUrl(token, file){
  if(file){
    return 'https://s3.amazonaws.com/' + process.env.AWS_BUCKET + '/' + token + '/avatar' + path.extname(file.hapi.filename);
  }else{
    return 'https://s3.amazonaws.com/' + process.env.AWS_BUCKET + '/generic_avatar.png';
  }
}

function uploadToS3(token, file, cb){
  file.pipe(concat(function(buf){
    var loc    = token + '/avatar' + path.extname(file.hapi.filename),
        params = {Bucket: process.env.AWS_BUCKET, Key: loc, Body: buf, ACL: 'public-read'},
        s3     = new AWS.S3();

    s3.putObject(params, cb);
  }));
}
