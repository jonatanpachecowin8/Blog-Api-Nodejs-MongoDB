const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
        required: [true, 'post is required']
    },
    user: {
        type: Object,
        required: [true, "user is required"]
    },
    description: {
        type: String,
        required: [true, "comment description is required"]
    }
},{
    timestamps: true
})

const comment = mongoose.model("Comment",commentSchema)

module.exports = comment