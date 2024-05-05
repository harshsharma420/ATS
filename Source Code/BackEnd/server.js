const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('Here');
    // res.render('index');
    // res.download('server.js');
    // res.json({ message: "Error"});
});

const userRouter = require('./routes/users');

app.use('/users' , userRouter);

app.listen(8080)