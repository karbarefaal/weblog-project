const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true,
    },
    com: {
        type: String,
        required: true,
    },
    blog: {
        type: mongoose.Schema.ObjectId,
        ref: "Blog",
        require: true,
    }
});


module.exports = mongoose.model('Comment', CommentSchema);
