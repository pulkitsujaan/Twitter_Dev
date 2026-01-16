const express = require('express');
const connect = require('./config/databases')

const app = express();

const {TweetRepository} = require('./repository/index');
const TweetService = require('./services/tweet-service')

app.listen(3000,async()=>{
    console.log(`Server started at PORT 3000`);
    await connect();
    console.log('Mongo DB connected');
    let service = new TweetService();
    const tweet = await service.create({content: 'my #WORKING tweet'});
    console.log(tweet);
})
