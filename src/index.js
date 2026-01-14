const express = require('express');
const connect = require('./config/databases')

const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comment')

const app = express();

app.listen(3000,async()=>{
    console.log(`Server started at PORT 3000`);
    await connect();
    console.log('Mongo DB connected');
    // const tweet = await Tweet.create({
    //     content:"Second tweet",
    // });
    // const tweet1 = await Tweet.findById('6963cfc008eb6368b2d76e5b');
    // console.log(typeof tweet1); 
    // console.log(tweet);

    const tweetRepo = new TweetRepository();
    const tweet = await tweetRepo.create({userEmail:'a@b.com',content:'Tweet 4'});
    console.log(tweet);
    // const comment = await Comment.create({content:'new comment'});
    // tweet.comments.push(comment);
    // await tweet.save();
    const tweets = await tweetRepo.getAll();
    console.log(tweets[5].contentWithEmail);
})