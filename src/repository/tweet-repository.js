const Tweet = require('../models/tweet');

class TweetRepository {
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

    async update(tweetId, data){
        try {
            const tweet = Tweet.findByIdAndUpdate(tweetId, data, {new:true});
            return tweet

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
}

module.exports = TweetRepository;