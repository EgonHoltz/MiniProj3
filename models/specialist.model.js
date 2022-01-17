const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CONFIG = require('../config/config');

const specialistSchema = new Schema({
    name: String,
    contact: String,
    birthDate: Date,
    yearSpecializationStart: Number,
    animals: [{
        animal: String
    }],
    creationDate: {
        type: Date,
        default: Date.now
    },
    evaluation: [{
        type: String,
        ref: CONFIG.mongodb.collections.user
    }],
});

module.exports = global.mongoConnection.model(CONFIG.mongodb.collections.specialist, specialistSchema);