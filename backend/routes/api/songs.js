const router = require("express").Router();
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { Song, SongList, User } = require("../../db/models");
const asyncHandler = require("express-async-handler");
const { singleMulterUpload, singlePublicFileUpload } = require("../../awsS3");

// retrieving all the songs
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const allSongs = await Song.findAll();
    return res.json({ allSongs });
  })
);


router.get(
  "/trend",
  asyncHandler(async (req, res) => {
    const trendSongs = await Song.findAll({ limit: 12 });
    return res.json({ trendSongs });
  })
);


router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const songId = req.params.id;
    const currentSong = await Song.findByPk(songId);
    return res.json({ currentSong });
  })
);



router.post("/upload",
  //singleMulterUpload("audioFile"),
  asyncHandler(async (req, res) => {
    const { song : {  title, artist, genre, album, imgUrl, audioFile, userId } } = req.body;

   // const audioFile = await singlePublicFileUpload(req.file);
    // console.log(req.body,"..................................................")
    // return 'data';

    const newSong = await Song.create({
      title,
      artist,
      genre,
      audioFile,
      imgUrl,
      album,
      userId
    });

    if (newSong) {
      return res.json({ newSong });
    } else return res.json({});
  })
);



router.put(
  "/:id",
  //singleMulterUpload("audioFile"),
  asyncHandler(async (req, res) => {
    console.log("req.params.id", req.params.id, req.body)

   const { song: {title, artist, genre, album, imgUrl, userId, audioFile } } = req.body;
   // const audioFile = await singlePublicFileUpload(req.file);
    const song = await Song.findByPk(req.params.id)

    const newSong = await song.update({
      title,
      artist,
      genre,
      audioFile,
      imgUrl,
      album, 
      userId
    });

    return res.json({ newSong });
  })
);



router.delete(
  "/delete",
  asyncHandler(async (req, res) => {
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





module.exports = router;
