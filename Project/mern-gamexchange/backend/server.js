const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

//uri is our db uri, where db is stored
//we get uri from mongodb dashboard
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true } );

const connection = mongoose.connection;
// once it's connected, log the text 
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

// middleware
app.use(cors());
app.use(express.json());

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
const listingsRouter = require('./routes/listings')

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);
app.use('/listings', listingsRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});