const express = require('express')
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validation');
const db = require('../../db/models');
const  { upload } = require("../../multer");

const router = express.Router();

/************************************************************************************************************************************/

//Song Validation
const songValidators = [
    check('title')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Title')
        .isLength({ max: 100 })
        .withMessage('Title must not be longer than 100 characters'),
    check('audioFile')
        .exists({ checkFalsy: true })
        .withMessage('Please provide an audioFile'),
    check('artist')
        .exists({ checkFalsy: true })
        .withMessage('Please provide Artist name')
        .isLength({ max: 20 })
        .withMessage('Artist name must not be longer than 20 characters'),
    check('description')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Description'),
    check('album')
        .exists({ checkFalsy: true })
        .withMessage('Please provide Album name')
        .isLength({ max: 50 })
        .withMessage('Album name must not be longer than 50 characters'),
    handleValidationErrors
]


/************************************************************************************************************************************/


//get all songs
router.get("/", asyncHandler(async (req, res) => {

      const songs = await db.Song.findAll();
      return res.json({ songs });
    })
);


//get a specific song
router.get("/:id", asyncHandler(async (req, res) => {

      const id = req.params.id;
      const song = await db.Song.findByPk(id);
      return res.json({ song });
    })
);


//get trending songs
router.get("/trendings", asyncHandler(async (req, res) => {

      const trendings = await Song.findAll({ limit: 15 });
      return res.json({ trendings });
    })
  );

//create/upload a song
router.post("/upload", songValidators, upload.single("audioFile"), asyncHandler(async (req, res) => {

        const { title, imageFile, artist, audioFile, description, album } = req.body;
    
    
        const newSong = await db.Song.create({
            title,
            imageFile,
            artist,
            audioFile,
            description,
            album,
        });
    
        if (newSong) {
            return res.json({ newSong });
        } else return res.json({});
    })
);



/************************************************************************************************************************************/

module.exports = router;