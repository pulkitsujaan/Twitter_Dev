const express = require('express');
const connect = require('./config/databases')

const app = express();

const Tweet = require('./models/tweet');

app.listen(3000,async()=>{
    console.log(`Server started at PORT 3000`);
    await connect();
    console.log('Mongo DB connected');
    const tweets = await Tweet.find({
        content: ["New tweet", "Tweet 4"]

    })
    console.log(tweets);
})
