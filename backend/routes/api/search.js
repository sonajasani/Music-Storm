const express = require('express');
const { Song, User } = require('../../db/models');

const asyncHandler = require('express-async-handler');

const { Op } = require('sequelize');

const router = express.Router()

// Get searched tracks
router.get('/:keyword', asyncHandler(async (req, res) => {
    const keyword = req.params.keyword
    const songs = await Song.findAll({
        where: {
            title: {
                [Op.iLike]: `%${keyword}%`
            }
        },
        include: User
    })

    return res.json(songs)
}))

module.exports = router