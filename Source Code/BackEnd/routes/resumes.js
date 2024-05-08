const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: '../userUploadedResumes/'})

router.post('/newResume', (req, res) => {
    res.send("file recieved");
});

module.exports = router;