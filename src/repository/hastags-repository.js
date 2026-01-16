import Hashtag from '../models/hashtags.js'

export default class HashtagRepository {
    async create(data) {
        try {
            const tag = Hashtag.create(data);
            return tag;
        } catch (error) {
            console.log(error);
        }
    }

    async bulkCreate(data){
        try {
            const tags = Hashtag.insertMany(data);
            return tags;
        } catch (error) {
            console.log(error);
        }
    }

    async get(id){
        try {
            const tag = Hashtag.findById(id);
            return tag;
        } catch (error) {
            console.log(error);
        }
    }

    async destroy(id){
        try {
            await Hashtag.findByIdAndDelete(id);
            return true;
        } catch (error) {
            console.log(error);
        }
    }

    async findByName(titleList){
        try {
            const tags = Hashtag.find({
                title:titleList
            })
            return tags;
        } catch (error) {
            console.log(error);
        }
    }

}