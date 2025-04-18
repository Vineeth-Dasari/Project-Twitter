const CommentRepository = require('./comment-repository');
const CrudRepository = require('./crud-repository');
const LikeRepository = require('./like-repository');
const UserRepository = require('./user-repository');
const TweetRepository = require('./tweet-repository');
HashtagRepository =  require('./hashtag-repository');

module.exports = 
{
    TweetRepository :  require('./tweet-repository'),
    HashtagRepository :  require('./hashtag-repository'),
    LikeRepository : require('./like-repository'),
    CrudRepository : require('./crud-repository'),
    UserRepository : require('./user-repository'),
    CommentRepository :  require('./comment-repository')
} 