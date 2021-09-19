const mongoose = require('mongoose');
const trainerSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    speciality: String,
    experience: String,
    img: String
});

const trainer = mongoose.model('Trainer', trainerSchema);

module.exports = trainer;  