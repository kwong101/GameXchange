import React, { Component } from 'react';
import {Nav, Navbar} from 'react-bootstrap';

import { setCurrentUser } from "../actions/authActions";
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";
import { logoutUser } from "../actions/authActions";

import PropTypes from "prop-types";
import { connect } from "react-redux";

import store from "../store";


// FIXME: not grabbing the correct image here
const logo = require('../ge_logo.svg');


/* FIXME: This whole login checker thing is weird but it works.
I have it checking if user is logged in, but as the code goes thru
the logic, my boolean vars are flipped. So technically this var
actually checks if user is NOT logged in, but it doesn't make sense why that works. 
*/

var tempIsUserLoggedIn;

// Got code from app.js
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // new: set the isUserLoggedIn to true 
  // Because this is where the token is generated if possible
  tempIsUserLoggedIn = false;

  // Got rid of code to check for expired token here
} else {
  // Else, the token doesnt exist. that means user isn't logged in
  tempIsUserLoggedIn = true;
}

class MyNavbar extends Component {

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  constructor(props) {
    super(props);
    this.state = {
      menu: false,
      isUserLoggedIn: tempIsUserLoggedIn
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    /* if (this.auth.isAuthenticated) {
        console.log('testing is authd');   */
      //this.history.push("/dashboard");
    //}
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

    if (this.state.isUserLoggedIn) {
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
                  <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                </Nav>
  
  
                <Nav className="ml-auto">
                  <Nav.Link href="/login">Log in</Nav.Link>
                  <Nav.Link href="/register">Register</Nav.Link>
                </Nav>
              </Navbar.Collapse>
        </Navbar>
      );
    } else {
        return (
          // ELSE, hide the login/register buttons
          // This is horribly designed but its the only way i could get it to work
          // FIXME: this needs a lot of work i think lmao

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
                    {/* <Nav.Link href="/create">Post listing</Nav.Link> */}
                    <Nav.Link href="/listings">Browse</Nav.Link>
                    <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                  </Nav>


                  <Nav className="ml-auto">
                    <Nav.Link onClick={this.onLogoutClick} href="#">Logout</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
          
              
          </Navbar>
        );
    }

    }




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

MyNavbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(MyNavbar);