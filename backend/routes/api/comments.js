const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { Comment, Song, User } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

/********************************************************************************************************************************/

//Comments Validation
const commentValidation = [
    check('content')
      .trim()
      .exists({ checkFalsy: true })
      .withMessage('Comment cannot be empty.')
      .isLength({ min: 1, max: 280 })
      .withMessage('Comment cannot be longer than 280 characters.'),
    handleValidationErrors,
];

/********************************************************************************************************************************/


router.get("/:songId", asyncHandler(async (req, res) => {
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

// create new comment
router.post("/:songId", asyncHandler(async (req, res) => {
    const songId = parseInt(req.params.songId);
    const { content, commenterId } = req.body;

    await Comment.create({
      content,
      commenterId,
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

router.delete("/delete", asyncHandler(async (req, res) => {
    const { id, songId, commenterId } = req.body;
    const comment = await Comment.findByPk(id);
    if (commenterId !== comment.commenterId) return;

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

router.put( "/update", asyncHandler(async (req, res) => {
    const { id, comment, songId, commenterId } = req.body;
    const commentUpdate = await Comment.findByPk(id);
    if (commenterId !== commentUpdate.cmmenterId) return;

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


/********************************************************************************************************************************/

module.exports = router;
