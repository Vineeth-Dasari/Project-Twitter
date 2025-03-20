const { LikeRepository, TweetRepository } = require('../repository/index');


class LikeService{
    constructor(){
        this.likeRepository = new LikeRepository();
        this.tweetRepository = new TweetRepository();
    }

    async toggleLike(modelId, modelType, userId){       // -- /api/v1/likes/toggle?id=modelid&type=Tweet

        if(modelType == 'Tweet'){
            var likeable = await this.tweetRepository.get(modelId);
            likeable.populate({path : 'likes'});
        }
        else if(modelType == 'Comment'){

        }else{
            throw new Error('unknown model type')
        }

        const exists = await this.likeRepository.findByUserAndLikeable({
            user : userId,
            onModel : modelType,
            likable : modelId
        });

        if(exists){
            likeable.likes.pull();
            await likeable.save();
            await exists.remove();
            var isAdded = false;
        }
        else{
            const newLike = await this.likeRepository.create({
                user : userId,
                onModel : modelType,
                likable : modelId
            })
            likeable.likes.push(newLike);
            await likeable.save();
            var isAdded = true;
        }

        return isAdded;

    }

}

module.exports = LikeService;