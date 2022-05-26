const router = require('express').Router();
const { restoreUser, requireAuth, setTokenCookie } = require('../../utils/auth.js');
const asyncHandler = require('express-async-handler');
const { User } = require('../../db/models');



router.post('/test', function(req, res) {
    res.json({ requestBody: req.body });
});










module.exports = router;
