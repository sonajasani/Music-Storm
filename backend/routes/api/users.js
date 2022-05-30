const express = require('express')
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');


const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Song, Comment } = require('../../db/models');

const router = express.Router();

/****************************************************************************************************************************************************/

const validateSignup = [
    check('email')
      .exists({ checkFalsy: true })
      .isEmail()
      .withMessage('Please provide a valid email.'),
    check('username')
      .exists({ checkFalsy: true })
      .isLength({ min: 4 })
      .withMessage('Please provide a username with at least 4 characters.'),
    check('username')
      .not()
      .isEmail()
      .withMessage('Username cannot be an email.'),
    check('password')
      .exists({ checkFalsy: true })
      .isLength({ min: 6 })
      .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors
];

// Sign up
router.post('/', validateSignup, asyncHandler(async (req, res) => {
      const { email, password, username } = req.body;
      const user = await User.signup({ email, username, password });
  
      await setTokenCookie(res, user);
  
      return res.json({ user });
    })
);


const userNotFoundError = () => {
  const userError = new Error('User not found.');
  userError.status = 404;
  userError.title = 'User not found.';
  userError.errors = {
    userId: `The requested user could not be found.`,
  };

  return userError;
};

router.get('/:id', asyncHandler(async (req, res, next) => {

    const userId = req.params.id;
    const user = await User.findOne({
      where: { id: userId },
      include: [
        {
          model: Song,
          as: 'songs',
          attributes: ['id'],
        },
        {
          model: Comment,
          as: 'comments',
          attributes: ['id'],
        },
      ],
    });

    if (!user) {
      next(userNotFoundError());
    }

    return res.json({
      user,
    });
  })
);


router.get('/', asyncHandler(async (req, res) => {

    const users = await User.findAll();
    return res.json({ users });
  })
);


router.get('/:id/songs', asyncHandler(async (req, res, next) => {
    const userId = req.params.id;
    const user = await User.findOne({
      where: { id: userId },
      include: {
        model: Song,
        as: 'song',
        include: {
          model: Comment,
          as: 'comments',
          attributes: ['id'],
        },
      },
    });

    if (!user) {
      next(userNotFoundError());
    }

    const { songs } = user;

    return res.json({
      songs,
    });
  })
);



/************************************************************************************************************************************/


module.exports = router;