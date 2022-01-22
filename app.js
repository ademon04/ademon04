const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

//MiddLewares
app.use(cors());
app.use(bodyParser.json());

//Import Routes
const postRoute = require('./routes/posts');

app.use('/posts',postRoute);

//ROUTES
app.get('/', (req,res) => {
    res.send('we are on home');
});


//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, () =>
console.log('connected to DB!')
);

//How to we start listening to the server 
app.listen(3000);