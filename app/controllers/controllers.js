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

var x;
//login
exports.login = function(req,res){
    var post = req.body;
    var email= post.email;
    var password = post.password;
    conn.query('SELECT * FROM user WHERE email = ?',[email], function (error, results, fields) {
        const hash = results[0].password;
        bcrypt.compare(password, hash, (err, response) => {
            var role_user = results[0].role_user;
            var userId = results[0].id;
            if(response === true){
                req.session.loggedIn = true;
                req.session.userId = results[0].id;
                req.session.email = email;
               x = req.session.userId;
                if (role_user === 'master'){
                    res.json({
                        message: "Berhasil Login sebagai MASTER, "+req.session.userId+"!"
                     })
                } else if(role_user == 'user'){
                    res.json({
                        message: "Berhasil Login sebagai USER,"+x+"!"
                    })
                } else {
                    res.json({
                        message: "Email dan Password Salah", userId
                    })
                }
            } else {
                if(req.session.loggedIn){
                    res.json({
                        message: "Berhasil Masuk"
                    })
                } else {
                    res.json({
                        message: "Kembali ke login"
                    })
                }
            }
        });
    });
}

//logout
exports.logout = (req, res) => {
    if(req.session.loggedIn) {
        req.session.destroy();
        res.status(200).send({message: "Logout Success"})
    } else {
        res.status(400).send({message: "Youre not Login"})
    }
};
//activity
exports.activity = (req, res) => {
    userId = x;
    console.log(userId);
        conn.query("SELECT * FROM activity WHERE user_id = '"+userId+"'", (err, results) =>{
            if (err) {
              console.log(err);
            } else {
              res.send(results);
            }
        });
}

//addActivity
exports.addActivity = (req, res) => {
	const act = req.body.title;
    conn.query("INSERT INTO activity (title) VALUES (?)", [act], (err, results) =>{
      if (err) {
        console.log(err);
      } else {
        res.status(200).send({message: "Ok"});
      }
    });
}

//editActivity
exports.editActivity = (req, res) => {
    let id = req.params.id;
        conn.query("SELECT * FROM activity WHERE id = ?", [id], (err, results) =>{
            // let singleData = results[0];
            if (err) {
                console.log(err);
            } else {
                res.send(results);
            }
        })
}
//updateActivity
exports.updateActivity = (req, res) => {
        var post = req.body;
        var Id = req.params.id;
        var title = post.title;
      
        var sql = "UPDATE `activity` SET title='"+title+"' WHERE `id` = '"+Id+"'";
      
        conn.query(sql, function(err, result){
            res.json({
                data: result
            })
        });
}
//deleteActivity
exports.deleteActivity = (req, res) => {
    let id = req.params.id;
    conn.query("DELETE FROM activity WHERE id = ?", [id], (err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).send({message: "Success delete one activity"})
      }
    })
}

//Profile
var id;
exports.profile = (req, res) => {
    console.log(x);
        conn.query("SELECT * FROM user WHERE  id = '"+x+"'", (err, results) =>{
            if (err) {
              console.log(err);
            } else {
              res.send(results);
            }
        });
}

//editProfile


//admin
exports.admin = (req, res) => {
    conn.query("SELECT * FROM user", (err, results) =>{
        if (err) {
          console.log(err);
        } else {
          res.send(results);
        }
      });
}
//addAdmin
exports.addAdmin = (req, res) => {
    var post  = req.body;
    var full_name= post.full_name;
    var no_tlp= post.no_tlp;
    var email= post.email;
    var pass= post.password;
      
        bcrypt.hash(pass, saltRounds, function(err, hash){
        var sql = "INSERT INTO `user`(`full_name`,`no_tlp`,`email`, `password`, `role_user`) VALUES ('" + full_name + "','" + no_tlp + "','" + email + "','" + hash + "', 'master')";
        var sql1 = "SELECT * FROM `user` WHERE `email` ='"+email+"'";
        conn.query(sql1, function(err, results){ 
          if(results.length) {
                res.json({
                    message: "Email telah terdaftar!"
                });
          } else {
            conn.query(sql, function(err, result){
                res.json({
                    message: "Berhasil"
                })
            })
          }
      });
    });
}
//deleteAdmin
exports.deleteAdm = (req, res) => {
    let id = req.params.id;
    conn.query("DELETE FROM user WHERE id = ?", [id], (err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).send({message: "Deleted"})
      }
    })
}