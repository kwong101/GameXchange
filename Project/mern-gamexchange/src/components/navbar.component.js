import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Navbar, Form, FormControl, Button, Nav, NavDropdown} from 'react-bootstrap'


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
      <nav>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
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

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />


          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          <Nav.Link href="/about">About Us</Nav.Link>
          <Nav.Link href="/listing">Browse Listings</Nav.Link>
            <NavDropdown title="More" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/create">Create Log</NavDropdown.Item>
              <NavDropdown.Item href="/viewlogs">View Logs</NavDropdown.Item>
              <NavDropdown.Item href="/user">Create User</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="ml-auto" />
            <Button variant="outline-success">Search</Button>
            </Form>
          </Nav>
        </Navbar.Collapse>

          
        
        </Navbar>

        <button className="navbar-toggler" type="button" onClick={ this.toggleMenu }>
          <span className="navbar-toggler-icon"></span>
        </button>

        

        {/* 
        <Link to="/" className="navbar-brand">GameXchange</Link>
        */}

        {/* <button className="navbar-toggler" type="button" onClick={ this.toggleMenu }>
          <span className="navbar-toggler-icon"></span>
        </button> */}

        {/* <div className={"collapse navbar-collapse " + show}>
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/about" className="nav-link">About Us</Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">Create Log</Link>
            </li>
            <li className="navbar-item">
              <Link to="/viewlogs" className="nav-link">View Logs</Link>
            </li>
            <li className="navbar-item">
              <Link to="/user" className="nav-link">Create User</Link>
            </li>
            <li className="navbar-item">
              <Link to="/listing" className="nav-link">Browse Listings</Link>
            </li>
          </ul> */}


          
</nav>


      
    
      );
  }
}