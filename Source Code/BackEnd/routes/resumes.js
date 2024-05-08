const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'userUploadedResumes/' });

router.post('/newResume', upload.single('file'), (req, res) => {
    res.json(req.file);
});

module.exports = router;