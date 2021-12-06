var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var userSchema = new Schema({
    firstname: {type:String,required:true},
    lastname: {type:String,required:true},
    email: {type:String,required:true},
    password: {type:String,required:true},
});

userSchema.statics.hashPassword = function hashPassword(password){
    return bcrypt.hashSync(password,10);
};

userSchema.methods.isValid = function(hashedpassword){
    return bcrypt.compareSync(hashedpassword,this.password);
};

var User = module.exports = mongoose.model('User',userSchema);