const express = require('express');

const TweetController = require('../../controllers/tweet-controller');
const LikeController = require('../../controllers/like-controller');
const CommentController = require('../../controllers/comment-controller');

const router = express.Router();

router.post('/tweets', TweetController.createTweet);
router.post('/likes', LikeController.toggleLike);
router.post('/comments', CommentController.createComment);

router.get('/tweets/:id', TweetController.getTweet);

module.exports = router;
