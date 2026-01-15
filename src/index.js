const express = require('express');
const connect = require('./config/databases')

const app = express();

app.listen(3000,async()=>{
    console.log(`Server started at PORT 3000`);
    await connect();
    console.log('Mongo DB connected');
})