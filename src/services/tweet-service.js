const {TweetRepository, HashtagRepository} = require("../repository/index");
class TweetService{
    constructor(){
        this.tweetRepository = new TweetRepository();
        this.hashTagRepository = new HashtagRepository();
    }

    async create(data){
        const content = data.content;
        const tags = content.match(/#[a-zA-Z0-9_]+/g).map((tag)=>tag.substring(1));//this regex extracts hashtags
        const tweet = await this.tweetRepository.create(data);
        let alreadyPresentTags = await this.hashTagRepository.findByName(tags);
        let titleOfPresentTags = alreadyPresentTags.map((tag) => tag.title);
        let newTags = tags.filter(tag => !titleOfPresentTags.includes(tag));
        newTags = newTags.map(tag => {
            return {title:tag, tweets:[tweet.id]}
        });
        await this.hashTagRepository.bulkCreate(newTags);
        alreadyPresentTags.forEach((tag) =>{
            tag.tweets.push(tweet.id);
            tag.save();
        })

        const allTags = await this.hashTagRepository.findByName(tags);
    
        tweet.hashtags = allTags.map(tag => tag._id);
        await tweet.save();
        return tweet;
    }
}

module.exports = TweetService;