import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    userEmail:{
        type:String
    },
},{timestamps:true} );

export const Comment = mongoose.model('Comment',commentSchema);