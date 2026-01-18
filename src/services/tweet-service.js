import {TweetRepository, HashtagRepository} from '../repository/index.js'
export default class TweetService{
    constructor(){
        this.tweetRepository = new TweetRepository();
        this.hashTagRepository = new HashtagRepository();
    }

    async create(data){
        const content = data.content;
        const tags = (content.match(/#[a-zA-Z0-9_]+/g) || [])
                                    .map((tag)=>tag.substring(1).toLowerCase())//this regex extracts hashtags
        const tweet = await this.tweetRepository.create(data);
        if(!tags || tags.length==0){
            return tweet;
        }
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
        return tweet;
    }

    async get(id){
        try {
            const tweet = await this.tweetRepository.getWithComments(id);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
}