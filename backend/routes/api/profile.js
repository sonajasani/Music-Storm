const router = require("express").Router();
const { check } = require("express-validator");
const asyncHandler = require("express-async-handler");

const { Song } = require("../../db/models");
const {requireAuth} = require("../../utils/auth"); 

/***************************************************************************************************************************************/

//get all songs uploaded by a user in his profile page
 router.get('/:userId/songs',requireAuth, asyncHandler(async (req, res) => {
       const userId = req.params.userId;
       const userSongs = await Song.findAll({
        where: { userId: userId },
       });
  
       return res.json({userSongs});
    })
);


/***************************************************************************************************************************************/


module.exports = router;