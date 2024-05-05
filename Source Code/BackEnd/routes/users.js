const express = require("express");
const router = express.Router()

router.get("/", (req, res) => {
    res.send("User List");
});

router.post('/', (req, res) => {
    res.send("New User");
});

router.get('/:id', (req , res) => {
    // req.params.id
    res.send("User Get")
});


module.exports = router;