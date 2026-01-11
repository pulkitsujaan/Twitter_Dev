const express = require('express');
const connect = require('./config/databases')

const TweetRepository = require('./repository/tweet-repository')

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
    // const tweet = await tweetRepo.create(
    //     {
    //         content:"New tweet",
    //         email:"b@d.com",
    //         comments:[{content:'abe ja na lode'},{content:'maa chuda na'}]
    //     }
        
    // );
    // console.log(tweet);
})