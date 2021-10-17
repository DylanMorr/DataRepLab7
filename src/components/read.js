import React, { Component } from 'react';
import Movies from './movies';

// import component and extend read class
class Read extends Component
{
    // create an api for the movie details
    state = {
        mymovies: [
            {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
            },
            {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
            },
            {
            "Title": "Charlie Wilson's War",
            "Year": "2007",
            "imdbID": "tt0472062",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTgwMDgwMDc4MF5BMl5BanBnXkFtZTYwOTU3MDM4._V1_SX300.jpg"
            }
            ]
            
    };

    // wrap return in render method
    render(){
        return(
            // create a div for html code
            <div>
                <h1>This is my Read Component!</h1>
                {/* call the films function in the Movies class and populate the MovieItem with the api */}
                <Movies films={this.state.mymovies}></Movies>
            </div>
        );
    }
}

// export Read class
export default Read;