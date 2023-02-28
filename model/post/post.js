const mongoose = require('mongoose')


const postSchema = new mongoose.Schema({
    titlle:{
        type:String,
        required:[true, 'Post title is required'],
        trim: true
    },
    description:{
        type: String,
        required: [true,'Description is required']
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: [true, 'post category is required']
    },
    numViews:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    likes:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    dislikes:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: [true, "Please autor is required"]
    },
    photo:{
        type:String,
        required:[true, 'post image is required']
    },
},{
    timestamps:true 
})


const Post = mongoose.model('Post',postSchema)

module.exports = Post