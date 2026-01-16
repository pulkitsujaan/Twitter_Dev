import express from 'express';
import {connect} from './config/databases.js'

const app = express();

import service from './services/tweet-service.js'

app.listen(3000,async()=>{
    console.log(`Server started at PORT 3000`);
    await connect();
    console.log('Mongo DB connected');
    const ser = new service();
    const tweet = await ser.create({content:"Done with #CAPITAL tweet ?"})
    console.log(tweet);
})
