import Tweet from '../models/tweet.js'
import CrudRepository from './crud-repository.js';

export default class TweetRepository extends CrudRepository {
    constructor(){
        super(Tweet);
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
            console.log(error);
        }
    }

    async find(id){
        try {
            const tweet = await Tweet.findById(id).populate({path:'likes'});
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
}