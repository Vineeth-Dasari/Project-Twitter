const express = require('express');

const TweetController = require('../../controllers/tweet-controller');
const LikeController = require('../../controllers/like-controller');

const router = express.Router();

router.post('/tweets', TweetController.createTweet);
router.post('/likes', LikeController.toggleLike);

module.exports = router;
