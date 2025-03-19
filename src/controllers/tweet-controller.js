const { response } = require('express');
const TweetService = require('../Services/tweet-service');

const tweetService = new TweetService();

    const createTweet = async (req, res) => {
        try {
            const response = await tweetService.create(req.body);
            return res.status(201).json({
                success: true,
                message: 'Successfully created a new tweet',
                data: response,
                err: {}
            });
        } catch (error) {
            return res.status(500).json({
                message: "unable to create tweet",
                data: {},
                success: false,
                err: error
            });
        }
    }

    const getTweet = async (req, res) => {
        try {
            const response = await tweetService.get(req.params.id);
            return res.status(200).json({
                success: true,
                message: 'Successfully tweet recieved',
                data: response,
                err: {}
            });
        } catch (error) {
            return res.status(500).json({
                message: "unable to fletch the tweet",
                data: {},
                success: false,
                err: error
            });
        }
    }




module.exports = {createTweet , getTweet} ;
