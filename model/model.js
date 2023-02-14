// Requiring module
const mongoose = require('mongoose');
const bcrypt = require ('bcrypt');
const saltRounds = 10;

// Course Modal Schema
const userSchema = new mongoose.Schema({
	name: String,
    email: String,
	pass: String
});

userSchema.pre('save', function(next){
	this.pass = bcrypt.hashSync(this.pass, saltRounds);
	next(); 
});
 
// Creating model objects
const User = mongoose.model('userWithPass', userSchema);


// Exporting our model objects
module.exports = {
	User
}
