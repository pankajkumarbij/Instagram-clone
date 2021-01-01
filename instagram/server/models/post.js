const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types;

const postSchema = new mongoose.Schema({
    title:{ type:String, required:true },
    body:{ type:String, required:true },
    image:{ type:String, required:true },
    likes:[{ type:ObjectId, ref:"User" }],
    postedby:{ type:ObjectId, ref:"User" }
})

const postModel= mongoose.model('Post', postSchema)
module.exports=postModel