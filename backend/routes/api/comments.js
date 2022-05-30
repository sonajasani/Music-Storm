const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { Comment, Song } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

/********************************************************************************************************************************/

const commentValidation = [
    check('content')
      .trim()
      .exists({ checkFalsy: true })
      .withMessage('Comment cannot be empty.')
      .isLength({ min: 1, max: 280 })
      .withMessage('Comment cannot be longer than 280 characters.'),
    handleValidationErrors,
];


const unauthorizedError = () => {
  const error = new Error('Unauthorized');
  error.status = 401;
  error.title = 'Unauthorized';
  error.errors = ['You are not authorized to update this comment.'];

  return error;
};

router.get('/', asyncHandler(async (_req, res) => {
    const comments = await Comment.findAll();
    return res.json({
      comments,
    });
  })
);


router.get('/:id', asyncHandler(async (req, res, next) => {

    const id = req.params.id;
    const comment = await Comment.findByPk(id);
    if (!comment) {
      return next();
    }

    return res.json({comment});
  })
);


router.post('/', requireAuth, commentValidation, asyncHandler(async (req, res, next) => {
    const { commenterId, songId, content} = req.body;
    const Song = await Song.findByPk(songId);

    if (!Song) {
      return next();
    }

    const comment = await Comment.create({
      commenterId,
      songId,
      content
    });

    return res.json({comment});
  })
);

router.put('/:id', requireAuth, commentValidation, asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const oldComment = await Comment.findByPk(id);

    if (!oldComment) {
      return next();
    }

    const { commenterId, content } = req.body;

    if (oldComment.commenterId !== commenterId) {
      return next(unauthorizedError());
    }

    await oldComment.update({ content });
    const comment = await Comment.findByPk(id);

    return res.json({
      comment,
    });
  })
);

router.delete('/:id', requireAuth, asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const comment = await Comment.findByPk(id);

    if (!comment) {
      return next();
    }

    if (comment.commenterId !== req.user.id) {
      return next(unauthorizedError());
    }

    await comment.destroy();

    return res.status(204).json({});
  })
);


/********************************************************************************************************************************/

module.exports = router;
