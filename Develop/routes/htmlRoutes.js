const path = require('path');
const router = require('express').Router();

// '/notes' is used to get the parent folder to respond
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});



module.exports = router;