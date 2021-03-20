const path = require('path');
const router = require('express').Router();

//default route to serve up the index.html landing page
router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
})

//serves up the notes.html page which is were all of the fun happens!
router.get('/notes', (req,res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
})

module.exports = router;