const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
const userSchema = mongoose.Schema({
    name: String,
    price: String,
    trainer: String,
    duration: String,
    capacity: String,
    email: { type: String, unique: true}
});
userSchema.plugin(uniqueValidator);
const user = mongoose.model('Course', userSchema);

module.exports = user;