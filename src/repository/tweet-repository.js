const Tweet = require('../models/tweet');
const CrudRepository =  require('./crud-repository');


class TweetRepository extends CrudRepository{ 

    constructor(){
        super(Tweet);
    }

    async create(data){
        
        try{
            const tweet = await Tweet.create(data);
            return tweet;
        }catch(error){
            console.log(error);
            throw error;
        }

    }

    async getWithComment(id){
        try{
            const tweet = await Tweet.findById(id).populate({
                path : 'comments',
                populate : {
                    path :'comments'
                }

            
            });
            return tweet;
        }catch(error){
            console.log(error);
        }
    }

    async getAll(offset, limit){
        try{
            const tweet = await Tweet.find().skip(offset).limit(limit);
            return tweet;
        }catch(error){
            console.log(error);
            
        }
    }
}

module.exports = TweetRepository;