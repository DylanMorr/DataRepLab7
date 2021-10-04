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
      <Router>
        <div className="App">

          <Navbar bg="primary" variant="dark">

            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/header">Header</Nav.Link>
              <Nav.Link href="/footer">Footer</Nav.Link>
            </Nav>

          </Navbar>

          <Switch>
            <Route path="/header">
              <Header />
            </Route>
            <Route path="/footer">
              <Footer />
            </Route>
            <Route path="/">
              <Content />
            </Route>
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;