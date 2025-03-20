const mongoose =  require('mongoose');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({

    email : {
        type : String,
        required : true,
        unique : true
    }, 
    password : 
        {
            type : String,
        required : true
    },
    name:{
        type : String,
        required : true
    }
    
}, {timestamps : true}) ;

UserSchema.pre('save', function (next) {
    const user = this;
    const SALT = bcrypt.genSaltSync(9);
    const encryptedPassword = bcrypt.hashSync(user.password, SALT);
    user.password = encryptedPassword;
    next();
  });

UserSchema.methods.comparePassword = function compare(password) {
    return bcrypt.compareSync(password, this.password);
}

UserSchema.methods.genJWT = function generate(){
    return jwt.sign({id: this._id, email:this.email}, 'twitter_secret', {
        expiresIn : '1h'
    }); // twitter_secrect is a secret key
}

const User = mongoose.model('User', UserSchema);

module.exports = User;  