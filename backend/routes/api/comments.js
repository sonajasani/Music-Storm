const router = require("express").Router();
const asyncHandler = require("express-async-handler");

const { Comment, User } = require("../../db/models");

/***************************************************************************************************************************************/

//get all comments for a particular song
router.get(
  "/:songId",
  asyncHandler(async (req, res) => {
    const comments = await Comment.findAll({
      where: { songId: parseInt(req.params.songId) },
      include: [
        {
          model: User,
        },
      ],
      order: [["createdAt", "DESC"]],
    });
    return res.json({ comments });
  })
);


//create new comment
router.post(
  "/:songId",
  asyncHandler(async (req, res) => {
    const songId = parseInt(req.params.songId);
    const { comment, userId } = req.body;

    await Comment.create({
      comment,
      userId,
      songId,
    });

    const comments = await Comment.findAll({
      where: { songId: songId },
      include: [
        {
          model: User,
        },
      ],
      order: [["createdAt", "DESC"]],
    });

    return res.json({ comments });
  })
);


//delete a coomment
router.delete(
  "/delete",
  asyncHandler(async (req, res) => {
    const { commentId, songId, userId } = req.body;
    const comment = await Comment.findByPk(commentId);
    if (userId !== comment.userId) return;

    await comment.destroy();

    const comments = await Comment.findAll({
      where: { songId: songId },
      include: [
        {
          model: User,
        },
      ],
      order: [["createdAt", "DESC"]],
    });

    return res.json({ comments });
  })
);


//edit a comment
router.put(
  "/update",
  asyncHandler(async (req, res) => {
    const { commentId, comment, songId, userId } = req.body;
    const commentUpdate = await Comment.findByPk(commentId);
    if (userId !== commentUpdate.userId) return;

    commentUpdate.comment = comment;
    await commentUpdate.save();

    const comments = await Comment.findAll({
      where: { songId: songId },
      include: [
        {
          model: User,
        },
      ],
      order: [["createdAt", "DESC"]],
    });

    return res.json({ comments });
  })
);


/***************************************************************************************************************************************/

module.exports = router;
