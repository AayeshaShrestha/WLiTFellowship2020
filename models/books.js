var mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    title: {
        type: String
    },
    author: String,
    description: String,
    genre: String,
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Books', BookSchema);