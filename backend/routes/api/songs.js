const router = require("express").Router();
const { check } = require("express-validator");
const asyncHandler = require("express-async-handler");

const { handleValidationErrors } = require("../../utils/validation");
const { Song, SongList, User } = require("../../db/models");


/***************************************************************************************************************************************/

//csong upload validation error
const validateSongUpload = [
  check("title")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a Song Title."),
  check("artist")
    .exists({ checkFalsy: true })
    .withMessage("Please provide Artist/s name.")
    .isLength({ max:50 })
    .withMessage("Artist name must not be more than 50 Characters"),
  check("genre")
    .exists({ checkFalsy: true })
    .withMessage("Please provide Genre of the song.")
    .isLength({ max: 20})
    .withMessage("Genre must not be more than 20 Characters"),
  check("album")
    .exists({ checkFalsy: true })
    .withMessage("Please provide Album Name.")
    .isLength({ max: 50})
    .withMessage("Album Name must not be more than 50 Characters"),
  check("imgUrl")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a Image Url."),
  check("audioFile")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a Audio/mp3 Url."),
  handleValidationErrors,
];


/***************************************************************************************************************************************/

//get all the songs
router.get("/", asyncHandler(async (req, res) => {
    const allSongs = await Song.findAll();
    return res.json({ allSongs });
  })
);


//get trending songs
router.get("/trend", asyncHandler(async (req, res) => {
    const trendSongs = await Song.findAll({ limit: 12 });
    return res.json({ trendSongs });
  })
);


//get a specific song
router.get("/:id", asyncHandler(async (req, res) => {
    const songId = req.params.id;
    const currentSong = await Song.findByPk(songId);
    return res.json({ currentSong });
  })
);


// //create new song
// router.post("/upload", asyncHandler(async (req, res) => {
//     const { song : {  title, artist, genre, album, imgUrl, audioFile, userId } } = req.body;


//     const newSong = await Song.create({
//       title,
//       artist,
//       genre,
//       audioFile,
//       imgUrl,
//       album,
//       userId
//     });

//     if (newSong) {
//       return res.json({ newSong });
//     } else return res.json({});
//   })
// );


// //update new song
// router.put("/:id", asyncHandler(async (req, res) => {
//     console.log("req.params.id", req.params.id, req.body)

//    const { song: {title, artist, genre, album, imgUrl, userId, audioFile } } = req.body;

//     const song = await Song.findByPk(req.params.id)

//     const newSong = await song.update({
//       title,
//       artist,
//       genre,
//       audioFile,
//       imgUrl,
//       album, 
//       userId
//     });

//     return res.json({ newSong });
//   })
// );


//delete a song
router.delete("/delete", asyncHandler(async (req, res) => {
    const { songId, userId } = req.body;
    const song = await Song.findByPk(songId);
    if (userId !== song.userId) return;

    await song.destroy();

    const songs = await Song.findAll({
      where: {
        userId: userId
      }
    });
    return res.json({ songs });
  })
);





router.post('/',  singleMulterUpload('audioFile'), validateSongUpload, requireAuth, asyncHandler(async (req, res) => {
  const {artist,
    genre,
    album,
    imgUrl,
    title, 
    } = req.body
    const audioFile = await singlePublicFileUpload(req.file);
    // console.log("::::::::::A", audioFile);

    const newSong = await Song.create({
      title,
      artist,
      genre,
      audioFile,
      imgUrl,
      album,
    });

    // console.log("::::::::::N", newSong);

    if (newSong) {
      return res.json({ newSong });
    } else return res.json({});
  })
)



router.put('/', singleMulterUpload('audioFile'), requireAuth, asyncHandler(async (req, res) => {
  
  const { artist,
    genre,
    album,
    imgUrl,
    title } = req.body

    let newSong
    
    const editSong = await Song.findByPk(id)

if(req.file){
    newSong = await editSong.update({
      title,
      artist,
      genre,
      audioFile,
      imgUrl,
      album,
    })
}else {
  newSong = await editSong.update({
    title,
      artist,
      genre,
      audioFile,
      imgUrl,
      album,
})
}

  return res.json(newSong)
}))






/***************************************************************************************************************************************/

module.exports = router;
