const express = require('express')
const app = express()
const port = 4000
// include cors
const cors = require('cors');
// include body parser
const bodyParser = require('body-parser');
// include mongoose
const mongoose = require('mongoose');

// use cors
app.use(cors());

// use cors to allow us to send data without any errors to webpage
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// parseapplication/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// setup connecton with mongoose
const myConnectionString = 'mongodb+srv://admin:admin@cluster0.7qf8q.mongodb.net/movies?retryWrites=true&w=majority';
mongoose.connect(myConnectionString, { useNewUrlParser: true });

// define schema
const Schema = mongoose.Schema;

// tell schema what data to store
var movieSchema = new Schema({
    title: String,
    year: String,
    poster: String
});

// create a model using schema
var MovieModel = mongoose.model("movie", movieSchema);

// setup server movie api
app.get('/api/movies', (req, res) => {
    // const for movies api
    // const myMovies = [{
    //     "Title": "Avengers: Infinity War",
    //     "Year": "2018",
    //     "imdbID": "tt4154756",
    //     "Type": "movie",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    // },
    // {
    //     "Title": "Captain America: Civil War",
    //     "Year": "2016",
    //     "imdbID": "tt3498820",
    //     "Type": "movie",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
    // },
    // {
    //     "Title": "World War Z",
    //     "Year": "2013",
    //     "imdbID": "tt0816711",
    //     "Type": "movie",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
    // }
    //     , {
    //     "Title": "War of the Worlds",
    //     "Year": "2005",
    //     "imdbID": "tt0407304",
    //     "Type": "movie",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BNDUyODAzNDI1Nl5BMl5BanBnXkFtZTcwMDA2NDAzMw@@._V1_SX300.jpg"
    // }];

    // find data in model
    MovieModel.find((err, data) => {
        // send back data
        res.json(data);
    })

    // use res.status to to get a response when data is sent successfully
    // res.status(200).json({
    //     message: "Data sent from api successfully",
    //     movies: myMovies
    // });
})

// search for movies
app.get('/api/movies/:id', (req, res) => {
    console.log(req.params.id);

    // return movie at id
    MovieModel.findById(req.params.id, (err, data) => {
        res.json(data);
    })
})

// send data to server using post and log data to console 
app.post('/api/movies', (req, res) => {
    console.log(req.body.title);
    console.log(req.body.year);
    console.log(req.body.poster);
    res.send('Data Received!');

    // interact with moviemodel here
    MovieModel.create({
        title: req.body.title,
        year: req.body.year,
        poster: req.body.poster
    });

    // send confirmation from server to client
    res.send("Item Added");
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})