const CommentService = require('../Services/comment-service');

const commentService = new CommentService();

    const createComment = async (req, res) => {
        try {
            const response = await commentService.create(req.query.modelType, req.query.modelId,req.body.userId, req.body.content);
            return res.status(201).json({
                success: true,
                message: 'Successfully created a new comment',
                data: response,
                err: {}
            });
        } catch (error) {
            return res.status(500).json({
                message: "unable to create comment",
                data: {},
                success: false,
                err: error
            });
        }
    }


module.exports = {createComment} ;
