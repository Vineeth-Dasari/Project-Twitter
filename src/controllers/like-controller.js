
const LikeService = require('../Services/like-service');

const likeService = new LikeService();

    const toggleLike = async (req, res) => {
        try {
            const response = await likeService.toggleLike(req.params.modelId, req.params.modelType,req.params.userId);
            return res.status(201).json({
                success: true,
                message: 'Successfully created toggle Like',
                data: response,
                err: {}
            });
        } catch (error) {
            return res.status(500).json({
                message: "unable to toggle Like",
                data: {},
                success: false,
                err: error
            });
        }
    }


module.exports = {toggleLike} ;
