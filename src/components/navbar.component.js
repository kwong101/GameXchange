import React, { Component } from 'react';
import {Nav, Navbar, Form, FormControl, Button, Dropdown, DropdownButton} from 'react-bootstrap';
import PrivateRoute from "./private-route/PrivateRoute";
import { registerUser } from "../actions/authActions";


// FIXME: not grabbing the correct image here
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

  // Trying to setup componentDidMount
  // to only show certain links on navbar if ur logged in
  //componentDidMount() {
    // If logged in, then change what navbar will show
/*     if(this.props.auth.isAuthenticated) {
      console.log('User not logged in.')
    }
  } */



  render() {

    // this was used with the OLD NAV CODE. its before the return
    //const show = (this.state.menu) ? "show" : "" ;

    return (
      // NEW NAV CODE with only react-bootstrap
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand href="/">
          <img
            alt="GameXchange Logo."
            src={logo}
            width="32"
            height="32"
            className="d-inline-block align-top"
            fill="white"
          />{' '}
          GameXchange
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">

              <Nav className="mr-auto">
                <Nav.Link href="/about">About us</Nav.Link>
                <Nav.Link href="/create">Post listing</Nav.Link>
                <Nav.Link href="/listings">Browse</Nav.Link>
                <Nav.Link href="#profile">My Profile</Nav.Link>
              </Nav>


              <Nav className="ml-auto">
                <Nav.Link href="/login">Log in</Nav.Link>
                <Nav.Link href="/register">Register</Nav.Link>
              </Nav>
            </Navbar.Collapse>
      </Navbar>
    );}




      // OLD NAV CODE WITH MIXING bootstrap and react-bootstrap 
/*       <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
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
              <Link to="/listings" className="nav-link">Browse</Link>
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
  } */
}