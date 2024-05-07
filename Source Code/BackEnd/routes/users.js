const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("User List");
});

router.post('/new', (req, res) => {
    res.send("New User");
});

router.get('/:id', (req, res) => {
    // req.params.id
    res.send("User Get");
});

router.put('/:id', (req, res) => {
    res.send("User Updated");
});

router.delete('/:id', (req, res) => {
    res.send("User Deleted");
});


module.exports = router;