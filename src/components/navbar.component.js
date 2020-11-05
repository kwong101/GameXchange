import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Navbar, Form, FormControl, Button} from 'react-bootstrap'


const logo = require('../ge_logo.svg');



export default class MyNavbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menu: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(){
    this.setState({ menu: !this.state.menu})
  }

  render() {

    const show = (this.state.menu) ? "show" : "" ;

    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">
            <img
              alt="GameXchange Logo"
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              fill="white"
            />{' '}
            GameXchange
          </Navbar.Brand>
        
        </Navbar>

        {/* 
        <Link to="/" className="navbar-brand">GameXchange</Link>
        */}

        <button className="navbar-toggler" type="button" onClick={ this.toggleMenu }>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={"collapse navbar-collapse " + show}>
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/about" className="nav-link">About Us</Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">Create Listing</Link>
            </li>
            <li className="navbar-item">
              <Link to="/viewlogs" className="nav-link">View Logs</Link>
            </li>
            <li className="navbar-item">
              <Link to="/user" className="nav-link">Create User</Link>
            </li>
          </ul>


          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>


        </div>

      </nav>
    
      );
  }
}