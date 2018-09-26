const express = require("express");
const router = express.Router();

//@route  GET request to api/posts/test
//@desc Tests user's route
//@access Public
router.get('/test', (req, res) => res.json({msg: "Maps Works"})
);

module.exports = router;
