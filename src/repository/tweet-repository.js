import Tweet from '../models/tweet.js'
import CrudRepository from './crud-repository.js';

export default class TweetRepository extends CrudRepository {

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

    async getAll(offset, limit){
        try {
            const tweet = await Tweet.find().skip(offset).limit(limit);
            return tweet;
        } catch (error) {
            
        }
    }
}