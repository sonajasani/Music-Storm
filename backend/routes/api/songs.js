const router = require("express").Router();
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { Song } = require("../../db/models");
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
  singleMulterUpload("audioFile"),
  asyncHandler(async (req, res) => {
    const { title, artist, genre, album, imgUrl } = req.body;

    const audioFile = await singlePublicFileUpload(req.file);

    const newSong = await Song.create({
      title,
      artist,
      genre,
      audioFile,
      imgUrl,
      album,
    });

    if (newSong) {
      return res.json({ newSong });
    } else return res.json({});
  })
);

router.put(
  "/upload",
  singleMulterUpload("audioFile"),
  asyncHandler(async (req, res) => {
    const { title, artist, genre, album, imgUrl } = req.body;

    const audioFile = await singlePublicFileUpload(req.file);

    const newSong = await Song.update({
      title,
      artist,
      genre,
      audioFile,
      imgUrl,
      album,
    });


    const songs = await Song.findAll({
      where:{}
      include: [
        {
          model: User,
        },
      ],
      order: [["createdAt", "DESC"]],
    });

    return res.json({ songs });
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
      include: [
        {
          model: User,
        },
      ],
      order: [["createdAt", "DESC"]],
    });
    return res.json({ songs });
  })
);



//'get all songs uploaded by a particular user
router.get(
  "/:userId",
  asyncHandler(async (req, res) => {
    const songs = await Song.findAll({
      where: { userId: parseInt(req.params.userId) },
      order: [["createdAt", "DESC"]],
    });
    return res.json({ songs });
  })
);




module.exports = router;
