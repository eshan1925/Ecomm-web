//jshint esversion:6

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
const { first } = require('rxjs');
var User = require('./models/user');
var passport = require('passport');
var cors = require('cors');
var app = express();


app.use(cors({
    origin:['http://localhost:4200','http://127.0.0.1:4200'],
    credentials: true
}));

var db = mongoose.connect('mongodb://localhost:27017/Users',function(err,response){
    if(err) console.log("Error in connecting with MongoDB");
    console.log("Connection has been established");
});


var passport = require('passport');
var session = require('express-session');
app.use(session({
    name: 'myname.sid',
    resave:false,
    saveUninitialized:false,
    secret:'secret',
    cookie:{
        maxAge:36000000,
        httpOnly:false,
        secure:false
    },
}));

require('./passport-config');
app.use(passport.initialize());
app.use(passport.session());

app.set('port', process.env.port || 3000);
app.use(bodyparser.json());
app.get('/',(req,res)=>{
    res.send("hello");
});


app.post('/register',(req,res)=>{
    var firstname = req.body.fname;
    var lastname = req.body.lname;
    var email = req.body.email;
    var password = req.body.password;

    var user = new User({
        firstname:firstname,
        lastname:lastname,
        email:email,
        password:password
    });

    user.save((err,result)=>{
        if(err){
            console.log(err);
            return res.send({success:"Failed to add user",status:500});
        }
        console.log("Successfully added new user!!!");
        return res.send({success:"Successfully added new user!!!",status:200});
    });
});

// app.post('/login',function(req,res,next){
//     console.log("Prsenet");
//     passport.authenticate('local',function(err,user,info){
//         if(err) {console.log("Prsenet");return res.status(501).json(err);}
//         if(!user){console.log("Prsenet");return res.status(502).json(info);}
//         req.logIn(user, function(err){
//             console.log("Prsenet");
//             if(err){return res.status(503).json(err);}
//             return res.status(200).json({message:"Login Success"});
//         });
//     });
// });


app.listen(app.get('port'),function(err,response){
    console.log("Server is running on port",app.get('port'));
});