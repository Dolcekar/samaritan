const express = require("express");
const router = express.Router();

// GET request to api/posts/test
router.get('/test', (req, res) => res.json({msg: "Profile Works"})
);

module.exports = router;