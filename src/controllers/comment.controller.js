const commentService = require("../services/comment.service");

const list = async (req, res, next) => {
    try {
        const comments = await commentService.list();
        res.json(comments);
    } catch (err) {
        next(err);
    }
}

const create = async (req, res, next) => {
    try {
        const { content, tweetId, parentid } = req.body;
        const userId = req.user.id;

        const comment = await commentService.create({ userId, tweetId, content, parentid});

        res.status(201).json(comment);
    } catch (err) {
        console.error("Error in comment creation:", err);
        next(err);
    }
};

const update = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedComment = await commentService.update(id, req.body);
        res.json(updatedComment);
    } catch (err) {
        next(err);
    }
}

const deletecomment = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await commentService.deletecomment(id);
        if (result) {
            res.status(200).json({ message: 'Comment deleted successfully' });
        }
    } catch (err) {
        next(err);
    }
}

const commentController = {
    list,
    update,
    create,
    deletecomment
}

module.exports = commentController;
