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
const playersRoute = require('./routes/players');

const Playersdata = require('./models/Playersdata');

app.use(bodyParser.json());


app.use('/players',playersRoute);
app.use('/attendance',playersRoute);



//ROUTES


app.get('/', (req, res) =>{ 
  res.send('Linces WR App')
});

//Connect to DB

require('dotenv').config(); // <--- Cargar variables del .env


mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const connect = mongoose.connection;

connect.on('connected', () => { console.log('Connected to MongoDB'); });
connect.on('error', (err) => { console.log('Error connecting to MongoDB:', err); });





app.listen(3000);


