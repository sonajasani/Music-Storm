const router = require("express").Router();
const { check } = require("express-validator");
const { Song, User, Comment } = require("../../db/models");
const asyncHandler = require("express-async-handler");
const {
    setTokenCookie,
    requireAuth,
    restoreUser,
  } = require("../../utils/auth"); 



// router.get('/:id/songs', restoreUser, asyncHandler(async(req, res) => {
//     const userId = req.params.id;
//     const user = await User.findOne({
//         where: {
//             id : userId
//         },
//         include: {
//             model:Song,
//             as:'user'}
//     })
//         console.log(user,".......................................................................")
//         return res.json({user})
// }));

 router.get('/:userId/songs', asyncHandler(async (req, res, next) => {
       const userId = req.params.userId;
       const userSongs = await Song.findAll({
        where: { userId: userId },
           include: {
             model: Comment,
             attributes: ['id'],
           }
       });
  
       return res.json({userSongs,});
     })
   );





module.exports = router;