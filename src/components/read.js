import React, { Component } from 'react';
import Movies from './movies';
import axios from 'axios';

// import component and extend read class
class Read extends Component {
    // create an api for the movie details
    state = {
        mymovies: []
    };

    // component life cycle hook gets called when component gets mounted / active in view
    componentDidMount() {
        // use axios to retrieve data from server 
        axios.get('http://localhost:4000/api/movies')
            .then((response) => {
                // update array movies with data
                this.setState({ mymovies: response.data })
            })
            // if theres a problem log an error to the console
            .catch((error) => {
                console.log(error)
            });
    }

    // wrap return in render method
    render() {
        return (
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