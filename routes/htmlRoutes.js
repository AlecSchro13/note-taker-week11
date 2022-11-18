const path = require('path');
const router = require('express').Router();

router.use("/api/notes", require("./apiRoutes"));

// '/notes' is used to get the parent folder to respond
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;