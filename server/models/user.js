'use strict';

var bcrypt  = require('bcrypt'),
    AWS     = require('aws-sdk'),
    path    = require('path'),
    Mongo   = require('mongodb'),
    concat  = require('concat-stream'),
    pg      = require('../lib/postgres');

function User(obj){
  this.username = obj.username;
  this.email = obj.email;
  this.password = bcrypt.hashSync(obj.password, 8);
  this.token = Mongo.ObjectID().toString();
  this.avatar = avatarUrl(this.token, obj.file.hapi.filename);
}

User.register = function(obj, cb){
  if(obj.password.length < 4){return cb('ERROR: PASSWORD LENGTH LESS THAN 4', null);}
  var user = new User(obj);

  console.log(user.token);

  pg.query('INSERT INTO users (username, email, password, avatar, token) VALUES ($1, $2, $3, $4, $5) RETURNING id', [user.username, user.email, user.password, user.avatar, user.token], function(err, results){
    if(err){return cb(err, null);}
    uploadToS3(user.token, obj.file, cb);
  });
};

module.exports = User;

// HELPER FUNCTIONS //
function avatarUrl(token, filename){
  return 'https://s3.amazonaws.com/' + process.env.AWS_BUCKET + '/' + token + '/avatar' + path.extname(filename);
}

function uploadToS3(token, file, cb){
  file.pipe(concat(function(buf){
    var loc    = token + '/avatar' + path.extname(file.hapi.filename),
        params = {Bucket: process.env.AWS_BUCKET, Key: loc, Body: buf, ACL: 'public-read'},
        s3     = new AWS.S3();

    s3.putObject(params, cb);
  }));
}
