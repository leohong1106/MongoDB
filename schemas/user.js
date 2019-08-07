const mongoose = require('mongoose');
const { Schema } = new Schema({
    name: {
        type:String,
        required:true,
        unique: true
    },
    age: {
        type: Number,
        required: true
    },
    married: {
        type: Boolean
    },
    comment: {
        type: String
    },
    creratedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('user', userSchema);
