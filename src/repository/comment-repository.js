const Comment = require('../models/commet');

const CrudRepository = require('./crud-repository');


class CommentRepository extends CrudRepository{
    constructor(){
        super(Comment);
    }

    // async findByUserAndLikeable(data){
    //     try{
    //         const like = await Like.findOne(data);
    //         return like;
    //     }catch (error){
    //         throw error;
    //     }
    // }

}


module.exports = CommentRepository;

