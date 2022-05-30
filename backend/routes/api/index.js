const router = require('express').Router();


const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const songsRouter = require('./songs.js');
const commentsRouter = require('./comments');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/songs', songsRouter);
router.use('/comments', commentsRouter);




/******************************************************************************************************/

module.exports = router;
