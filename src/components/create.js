import React, { Component } from 'react';

// import Component from react library and extend Create class
class Create extends Component
{
    // wrap return in the render method
    render(){
        return(
            // create a div with text in h1 tags
            <div>
                <h1>This is my Create Component!</h1>
            </div>
        );
    }
}

// export Create class
export default Create;