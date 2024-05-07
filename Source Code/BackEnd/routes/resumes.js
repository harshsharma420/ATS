const express = require('express');
const router = express.Router();

router.post('/newResume', (req, res) => {
    res.send("file recieved");
});

module.exports = router;