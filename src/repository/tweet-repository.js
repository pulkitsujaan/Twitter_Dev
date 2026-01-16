import Tweet from '../models/tweet.js'

export default class TweetRepository {
    async create(data) {
        try {
            const tweet = Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async get(tweetId){
        try {
            const tweet = Tweet.findById(tweetId);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async getWithComments(tweetId){
        try {
            const tweet = Tweet.findById(tweetId).populate({
                path:'comments'
            }).lean();
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async destroy(id){
        try {
            await Tweet.findByIdAndDelete(id);
            return true;
        } catch (error) {
            console.log(error);
        }
    }

    async getAll(offset, limit){
        try {
            const tweet = await Tweet.find().skip(offset).limit(limit);
            return tweet;
        } catch (error) {
            
        }
    }
}