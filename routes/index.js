const router = require('express').Router();
const path = require('path');

router.route("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
})

router.route("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
});

router.route("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"))
});


module.exports = router;
