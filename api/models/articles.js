const mongoose = require('mongoose');

const articlesSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    title: {type: String, require: true},
    details: {type: String, require: true}
})

module.exports = mongoose.model('articles',articlesSchema)