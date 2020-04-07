const express                   = require('express');
const session                     = require('express-session');
const {check, validationResult} = require('express-validator');
const app                       = express();
const bcrypt                    = require('bcrypt');
const saltRounds                = 10;
let conn                        = require('../models/db.js');
const cors                      = require('cors');
app.use(cors());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
})); 

//Register
exports.register = [
    check('full_name').notEmpty(),
    check('no_tlp').isNumeric().notEmpty(),
    check('email').isEmail().notEmpty(),
    check('password').isLength({max: 8}).notEmpty(),
    function(req,res) {
    var post  = req.body;
    var full_name= post.full_name;
    var no_tlp= post.no_tlp;
    var email= post.email;
    var pass= post.password;
    const errors = validationResult(req);
      
        bcrypt.hash(pass, saltRounds, function(err, hash){
        var sql = "INSERT INTO `user`(`full_name`,`no_tlp`,`email`, `password`, `role_user`) VALUES ('" + full_name + "','" + no_tlp + "','" + email + "','" + hash + "', 'user')";
        var sql1 = "SELECT * FROM `user` WHERE `email` ='"+email+"'";
        conn.query(sql1, function(err, results){ 
          if (!errors.isEmpty()) {
                return res.status(422).json(errors.array());
          } else if(results.length) {
                res.json({
                    message: "Email telah terdaftar!"
                });
          } else {
            conn.query(sql, function(err, result){
                res.json({
                    message: "Berhasil mendaftar"
                })
            })
          }
      });
    });
  }
]

//login
exports.login = function(req,res){
    var post = req.body;
    var email= post.email;
    var password = post.password;
    conn.query('SELECT * FROM user WHERE email = ?',[email], function (error, results, fields) {
        const hash = results[0].password;
        bcrypt.compare(password, hash, (err, response) => {
            if(response === true){
                var role_user = results[0].role_user;
                var userId = results[0].id.toString()
                if (role_user === 'master'){
                    res.json({
                        message: "Berhasil Login sebagai MASTER", userId
                     })
                } else if(role_user == 'user'){
                    res.json({
                        message: "Berhasil Login sebagai USER", userId
                    })
                } else {
                    res.json({
                        message: "Email dan Password Salah", userId
                    })
                }
            }
        });
    });
}
//logout
//activity
exports.activity = (req, res) => {
    conn.query("SELECT id, title FROM activity", (err, results) =>{
        if (err) {
          console.log(err);
        } else {
          res.send(results);
        }
      });
}

//addActivity
//editActivity
//deleteActivity

exports.profile = function(req, res){
    var userId = req.session.id;
    var Id = req.params.id;
    var sql ="SELECT * FROM `user` WHERE `id` = '"+Id+"'";
    console.log(sql);
    conn.query(sql, function(err, results){
        res.json({results})
    });
}

//editProfile
//admin
//addAdmin
//deleteAdmin