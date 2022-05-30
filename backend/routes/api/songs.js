const express = require('express')
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { requireAuth } = require('../../utils/auth');
const { handleValidationErrors } = require('../../utils/validation');
const { User, Song, Comment }= require('../../db/models');
const {singlePublicFileUpload, singlePublicFileDelete, multerFieldsUpload, multiplePublicFileUpload} = require('../../awsS3');

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


const songNotFoundError = () => {
    const songError = new Error('Song not found.');
    songError.status = 404;
    songError.title = 'Song not found.';
    songError.errors = {
      songId: `The requested track could not be found.`,
    };
  
    return songError;
};
  

//get all songs
router.get("/", asyncHandler(async (req, res) => {

      const songs = await db.Song.findAll({
          include: {
              model: Comment,
              as: 'comments',
              attributes: [id],
          }
      });
      return res.json({ songs });
    })
);


//get a specific song
router.get("/:id", asyncHandler(async (req, res) => {

      const id = req.params.id;
      const song = await Song.findOne({
        where: { id: id },
        include: {
          model: Comment,
          as: 'comments',
          attributes: ['id'],
        },
      });

      if (!song) {
        return next(songNotFoundError());
      }

      return res.json({ song });
    })
);


//get trending songs
router.get("/trendings", asyncHandler(async (req, res) => {

        const trendings = await Song.findAll({
            limit: 15,
            include: {
                model: Comment,
                as: 'comments',
                attributes: ['id'],
            },
        });

        return res.json({ trendings });
    })
  );

//create/upload a song
router.post("/", requireAuth, multerFieldsUpload(), songValidators, asyncHandler(async (req, res) => {

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

//update a song
router.put("/:id", requireAuth, multerFieldsUpload(), songValidators, asyncHandler(async (req, res) => {

        const id = req.params.id; 
        const song = Song.findOne(id);

        if(song){
            const { title, imageFile, artist, audioFile, description, album } = req.body;
            const updatedSong = await db.Song.create({
                title,
                imageFile,
                artist,
                audioFile,
                description,
                album,
            });

            if (updatedSong) {
                return res.json({ updatedSong });
            } else return res.json({});
        }
    })
);


router.delete('/:id', requireAuth, asyncHandler(async (req, res) => {
      const songId = req.params.id;
      const song = await song.getTrackById(songId);
  
      if (song) {
        const key = getObjectKey(track.trackUrl);
        const user = req.user;
        await singlePublicFileDelete(key);
  
        await song.destroy();
        res.status(204).json({ message: 'You have deleted your song.'});
      } else {
        res.status(404).json({ message: 'Track does not exist.' });
      }
    })
);


router.get('/:id/comments', asyncHandler(async (req, res, next) => {

      const songId = req.params.id;
      const song = await Song.findOne({
        where: { id: songId },
        include: {
          model: Comment,
          as: 'comments',
        },
      });
  
      if (!song) {
        return next(songNotFoundError());
      }
  
      const { comments } = song;
      return res.json({comments});
    })
);


/************************************************************************************************************************************/

module.exports = router;