const mongoose = require('mongoose');

const thingSchema = mongoose.Schema({
    userId: { type: String, required: true },
    name: { type: String, required: true },
});

module.exports = mongoose.model('Thing', thingSchema);