import mongoose from 'mongoose'

const hashtagSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
},{timestamps:true})

const Hashtag = mongoose.model('Hashtag', hashtagSchema);

export default Hashtag;