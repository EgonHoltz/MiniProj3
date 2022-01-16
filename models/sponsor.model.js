const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CONFIG = require('../config/config');

const sponsorSchema = new Schema({
    name: String,
    contact: String,
    group: String,
    activeSponsor: {
        type: Boolean,
        default: true
    },
    valueCampaign: Number,
    activationDate: {
        type: Date,
        default: Date.now
    },
    endDate: {
        type: Date,
        default: Date.now
    },
    dtRegister: {
        type: Date,
        default: Date.now
    },
    evaluation: [{
        type: String,
        ref: CONFIG.mongodb.collections.user
    }],
});

module.exports = global.mongoConnection.model(CONFIG.mongodb.collections.sponsor, sponsorSchema);