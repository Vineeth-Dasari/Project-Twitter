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

    // const tweet = await Tweet.create({
    //     content : 'third Tweet',
    // })

    // const tweetrepo = new TweetRepository();
    // const tweet = await tweetrepo.create({ content : 'Tweet with comment collection'});
    // console.log(tweet);
    // const comment = await Comment.create({content : 'new comment'});
    // tweet.comment.push(comment);
    // await tweet.save();
    // console.log(tweet);
    const tweetrepo = new TweetRepository();
    const tweet = await tweetrepo.getWithComment('67d174ce67a0664e7fb210ff');
    console.log(tweet);
})
