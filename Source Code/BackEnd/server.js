const express = require('express');
require('dotenv').config();
const app = express();

app.get('/', (req, res) => {
    console.log('This is a server for the ATS project');
    // res.render('index');
    // res.download('server.js');
    // res.json({ message: "Error"});
});

const userRouter = require('./routes/users');
const resumesRouter = require('./routes/resumes');

app.use(express.json());
app.use('/users', userRouter);
app.use('/resumes', resumesRouter);

app.listen(process.env.PORT);