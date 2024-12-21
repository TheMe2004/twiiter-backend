const Comment = require("../database/comment.model");
const { NotFoundError } = require("../utils/error.utils");

const list = async (filter = {}) => {
    try {
        let comments = await Comment.findAll({
            where: filter,
        });
        return comments;
    } catch (error) {
        throw new NotFoundError("No comments found", 404);
    }
};

const create = async ({ userId, tweetId, content, parentid }) => {
    try {
        const comment = await Comment.create({
            userId,
            tweetId,
            content,
            parentid
        });
        return comment;
    } catch (err) {
        console.error("Error in comment creation:", err);
    }
};

const update = async (id, updatedData) => {
    try {
        const commentToUpdate = await Comment.findByPk(id);
        if (!commentToUpdate) {
            throw new NotFoundError("Comment not found");
        }
        await commentToUpdate.update(updatedData);
        return commentToUpdate;
    } catch (error) {
        console.error(error);
        throw new Error("Comment update failed");
    }
};

const deletecomment = async (id) => {
    try {
        const result = await Comment.destroy({ where: { id: id } });
        if (result === 0) {
            throw new NotFoundError("Comment not found");
        }
        return { message: "Comment deleted successfully" };
    } catch (error) {
        console.error(error);
        throw new NotFoundError("Comment not found");
    }
};

const commentService = {
    list,
    create,
    update,
    deletecomment
}

module.exports = commentService;
