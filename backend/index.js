var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
const { first } = require('rxjs');
var User = require('./models/user');
var cors = require('cors');
var app = express();


var db = mongoose.connect('mongodb://localhost:27017/Users',function(err,response){
    if(err) console.log("Error in connecting with MongoDB");
    console.log("Connection has been established");
});


app.use(cors());
app.set('port', process.env.port || 3000);
app.use(bodyparser.json());
app.get('/',(req,res)=>{
    res.send("hello");
})

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
    // user.firstname = firstname;
    // user.lastname = lastname;
    // user.email = email;
    // user.password = password;

    user.save((err,result)=>{
        if(err){
            console.log(err);
            return res.send({success:"Failed to add user",status:500});
        }
        console.log("Successfully added new user!!!")
        return res.send({success:"Successfully added new user!!!",status:200});
    })
})


app.listen(app.get('port'),function(err,response){
    console.log("Server is running on port",app.get('port'));
});