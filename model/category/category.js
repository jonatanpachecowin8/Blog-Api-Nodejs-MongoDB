const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    titlle: {
        type: String,
        required: true
    }
},{
    timestamps: true
})

const category = mongoose.model("Category",categorySchema)

module.exports = category