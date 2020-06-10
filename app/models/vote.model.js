const mongoose = require('mongoose');;

const voteSchema = mongoose.Schema({
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
    score:{
        type: Number,
        required: true,
        unique: false,
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('vote', voteSchema);