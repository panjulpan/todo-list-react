const express = require('express');
const bodyParser = require('body-parser');
const session= require('express-session');
const app = express();
const conn = require('./app/models/db.js');
const cors = require('cors');

app.use(cors());
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 6000}
}));
require('./app/routes/routes.js')(app);

conn.connect(function(err){
    if(!err) {
        console.log("Database is connected.... nn");
    } else {
        console.log("Error connecting database .... nn");
    }
});

app.listen(4000, () => {
    console.log('Server is running at port 4000');
})
