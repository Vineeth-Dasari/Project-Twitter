const express = require('express');
const bodyParser = require('body-parser')
const connect = require('./config/database');
const app = express();
const TweetRepository =  require('./repository/tweet-repository');
const HashtagRepository =  require('./repository/hashtag-repository');
const Tweet = require('./models/tweet');
const Comment = require('./models/commet');

const apiRoutes = require('./routes/index')

const TweetService = require('./Services/tweet-service');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api', apiRoutes);

app.listen(3000, async () => {

    console.log('server started at : 3000');
    await connect();
    console.log('Mongo DB connected');

    // let service = new TweetService();
    // //console.log(typeof(service));

    // const tweet = service.create({
    //     content : 'My new #job is very good and very #excited to a part of new #company'
    // })
})
