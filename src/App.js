import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Content from './components/content';
import { Navbar, Nav } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  // wrap everything in render method
  render() {
    return (
      // put router tags so we can use the switch statement
      <Router>
        <div className="App">

          {/* Create a navbar for navigating the webpage */}
          <Navbar bg="primary" variant="dark">

            {/* Link all the component pages to the navbar and name accordingly */}
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/header">Header</Nav.Link>
              <Nav.Link href="/footer">Footer</Nav.Link>
            </Nav>

          </Navbar>

          {/* Setup a switch statement to get the correct paths */}
          <Switch>
            {/* Sets path of file to /header */}
            <Route path="/header">
              {/* Displays Header class s*/}
              <Header />
            </Route>
            {/* Sets path of file to /footer */}
            <Route path="/footer">
              {/* Displays Footer class s*/}
              <Footer />
            </Route>
            {/* Sets path of file to / as it is just mainpage */}
            <Route path="/">
              {/* Displays Content class s*/}
              <Content />
            </Route>
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;