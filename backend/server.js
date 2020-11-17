const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

var bodyParser = require('body-parser');

// new login:
// adding the next 2 lines
const passport = require("passport");
const users = require("./routes/users");


var path = require('path');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;


// new login:
// commented this var passport line out
//var passport = require("passport");

// middleware
app.use(cors());
app.use(express.json());

// new login: 
// bodyparser middleware
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());

// new login:
// DB config
const db = process.env.ATLAS_URI;
// Was using the line below, but i guess i can get the uri directly
//const db = require("./config/keys").uri;


// new login: 
// connect to mongodb
mongoose
    .connect(
    db,
    {   
        useNewUrlParser: true, 
        // had to add these next 3 lines to get rid of deprecation errors
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);


// new login:
// i commented this too
//uri is our db uri, where db is stored
//we get uri from mongodb dashboard
/* const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true } );
 */

// new login:
// i commented this too
/* const connection = mongoose.connection;
// once it's connected, log the text 
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
}); */


// NEWWWWWWWWWWWWW
// new login:
// i commented this out
/* app.use(passport.initialize());
require("./config/passport"); */

const authsRouter = require("./routes/auths");
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
const listingsRouter = require('./routes/listings')
const ImageRouter = require('./routes/images');


//create uploads folder and create a static path ref to it
//app.use(logger('dev'));

app.use('/uploads', express.static(__dirname));





app.use("/", authsRouter);
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);
app.use('/listings', listingsRouter);
app.use('/images', ImageRouter);




app.listen(port, () => {
    // FIXME: I'm just noting that I made a change here to see
    // If we can get it to print the port number correctly. 
    // idk when this stopped working. it just prints ${port}
    // Ok it works now
    //console.log('Server is running on port: ${port}');
    console.log('Server is listening on port:', port)
});