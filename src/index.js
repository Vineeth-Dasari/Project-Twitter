const express = require('express');

const connect = require('./config/database');
const app = express();
const TweetRepository =  require('./repository/tweet-repository');
const HashtagRepository =  require('./repository/hashtag-repository');
const Tweet = require('./models/tweet');
const Comment = require('./models/commet');

const TweetService = require('./Services/tweet-service');

app.listen(3000, async () => {

    console.log('server started at : 3000');
    await connect();
    console.log('Mongo DB connected');

       

    let service = new TweetService();
    //console.log(typeof(service));

    const tweet = service.create({
        content : 'Iam #excited for my new #job'
    })

    
})
