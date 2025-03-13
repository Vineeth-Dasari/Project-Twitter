const express = require('express');

const connect = require('./config/database');
const app = express();
const TweetRepository =  require('./repository/tweet-repository');
const Tweet = require('./models/tweet');
const Comment = require('./models/commet');

app.listen(3000, async () => {

    console.log('server started at : 3000');
    await connect();
    console.log('Mongo DB connected');
    
})
