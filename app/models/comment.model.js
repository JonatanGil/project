const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    idMovie:{
        type: String,
        required: true,
        unique: false,
    },
    idUser:{
        type: String,
        required: true,
        unique: false,
    },
    comment:{
        type: String,
        required: true,
        unique: false,
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('comment', commentSchema);