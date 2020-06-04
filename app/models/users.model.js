const mongoose = require('mongoose');
// const bcrypt   = require('bcryptjs');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    image: {
        type: String,
        required: false,
        unique: false
    },
    comment: {
        type: Number,
        required: false,
        unique: false,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('user', userSchema);