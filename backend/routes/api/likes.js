const express = require('express');
const asyncHandler = require('express-async-handler');
const { requireAuth } = require('../../utils/auth');
const router = express.Router();
const {Like} = require('../../db/models');



router.get('/:songId', asyncHandler(async (req, res) => {
    const {songId} = req.params
    const songLikes = await Like.findAll({where: {songId}})

    res.json(songLikes)
}))

router.post('/', requireAuth, asyncHandler(async (req, res) => {
    const newLike = await Like.create(req.body)
    res.json(newLike)
}))

router.delete('/', requireAuth, asyncHandler(async (req, res) => {
    const {songId, userId} = req.body
    const deleteLike = await Like.findOne({where: {songId, userId}})
    const deleteLikeId = deleteLike.id
    await deleteLike.destroy()
    res.json(deleteLikeId)
}))





module.exports = router;