const express = require('express');
const router = express.Router();
const { getMyProfile } = require("../controllers/users");

router.get('/getMyProfile', getMyProfile);

module.exports = router;