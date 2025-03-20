const { response } = require('express');
const TweetService = require('../Services/tweet-service');

const {upload} = require('../config/file-upload-S3-config');
const singleUploader = upload.single('image');

const tweetService = new TweetService();

    const createTweet = async (req, res) => {
        try {
            singleUploader(req, res, async function (err, data) {
                if(err) {
                    return res.status(500).json({error: err});
                }
                console.log('Image url is', req.file);
                const payload = {...req.body};
                payload.image = req.file.location;
                const response = await tweetService.create(payload);
                return res.status(201).json({
                    success: true,
                    message: 'Successfully created a new tweet',
                    data: response,
                    err: {}
                });
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'something went wrong',
                data: {},
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
