const express = require('express');

const TweetController = require('../../controllers/tweet-controller');
const LikeController = require('../../controllers/like-controller');
const CommentController = require('../../controllers/comment-controller');
const UserController = require('../../controllers/auth-controller');
const { authenticate } = require('../../middlewares/authenticate');


const router = express.Router();

router.post('/tweets',authenticate, TweetController.createTweet);
router.post('/likes', LikeController.toggleLike);
router.post('/comments', CommentController.createComment);
router.post('/signup', UserController.signup);
router.post('/login',UserController.login);

router.get('/tweets/:id', TweetController.getTweet);


 

module.exports = router;
