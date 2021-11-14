import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

// import Component and extend MovieItem class with it
class MovieItem extends Component 
{
    // wrap return in render method
    render() {
        return (
            // create a div for html code
            <div>
                {/* Create a card and output all the movie details using the cards */}
                <Card>
                    <Card.Header>{this.props.myfilm.title}</Card.Header>
                    <Card.Body>
                        <blockquote>
                            <img src={this.props.myfilm.poster}></img>

                            <footer>
                                {this.props.myfilm.year}
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

// export MovieItem class
export default MovieItem;