import express from 'express';
import passport from 'passport';
import {connect} from './config/databases.js'
import {passportAuth} from './config/jwt-middleware.js'

import apiRoutes from './routes/index.js'

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(passport.initialize());

app.use('/api',apiRoutes);
passportAuth(passport);

app.listen(3000,async()=>{
    console.log(`Server started at PORT 3000`);
    await connect();
    console.log('Mongo DB connected');
})
