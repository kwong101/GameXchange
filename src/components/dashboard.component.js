import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faMoon, faSun, faSnowflake, faHourglass } from '@fortawesome/free-solid-svg-icons'


class Dashboard extends Component {

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };
    
    render() {
        
        const { user } = this.props.auth;
            return (
                
                <Container>
                    <center>  
                        <h1>
                            Dashboard
                        </h1>
                    </center>
                    < br />
                    <Row className="form-group">
                        {/* form-group adds 15px margin to bottom of row */}
                        <Col sm={3} className="form-group ml-0 mr-1 outer-dashboard profile-dashboard inner-dashboard" > 
                            <div className=" mx-3">
                                <br />
                                <img className="img-profile" src="https://source.unsplash.com/U-Z4P2H3KFE/80x80/" alt="Male profile pic."/>

                                <br />

                                <h5>
                                    {user.name.split(" ")[0]}
                                </h5>
                            </div>
                            
                        </Col>
                        < br />


                        <Col sm={5} className="form-group outer-dashboard bio-dashboard  inner-dashboard">
                            <div className=" mx-3">
                                <h5>
                                    Bio
                                </h5>
                                <p>Journalist, artist, and avid explorer. I would expect to be a lot better at puzzles by now. These badges make me feel a little better, though.</p>
                            </div>
                            < br />

                            
                        </Col>

                        <Col sm={3} className="form-group mr-0 ml-1 outer-dashboard stats-dashboard  inner-dashboard">
                            <div className=" mx-3">
                                <h5>
                                    Badges
                                </h5>
                                
                                <br />
                                
                                <p>
                                    <FontAwesomeIcon className="fa-fw" size="lg" icon={faCoffee} /> <FontAwesomeIcon className="fa-fw" size="lg" icon={faMoon} /> 
                                </p>
                                
                                <p>
                                    <FontAwesomeIcon className="fa-fw" size="lg" icon={faSun} />
                                    <FontAwesomeIcon className="fa-fw" size="lg" icon={faSnowflake} />
                                    <FontAwesomeIcon className="fa-fw" size="lg" icon={faHourglass} />
                                </p>
                            </div>

                        
                        </Col>
                            
                    </Row>
                    < br />
                    < br />


                    {/* Active listings row */}
                    <Row className="form-group">
                        <Col sm={12} className="outer-dashboard inner-dashboard active-listings">
                            <h5>
                                Active Listings
                            </h5>
                            <div className="first-listing">
                                
                                    <div >
                                    <Image src={require('./display-images/eels-and-escalators.jpg')} rounded/>
                                    <h6>Eels and escalators</h6>
                                    </div>

                                    <div>
                                    <Image src="https://source.unsplash.com/_zNgspEPHCI/140x140/" rounded />
                                    <h6>Scrabble</h6>
                                    </div>

                                    <div>
                                    <Image src="https://source.unsplash.com/MkoTQg_5xjw/140x140/" rounded />
                                    <h6>Monopoly</h6>
                                    </div>

                                    <div>
                                    <Image src="https://source.unsplash.com/6jwkGVyb9zY/140x140/" rounded />
                                    <h6>Golden Gate Bridge Puzzle</h6>
                                    </div>
                            </div>

                        </Col>
                    </Row>

                    < br />
                    < br />

                    {/* Favorites row */}
                    <Row className="form-group">
                        <Col sm={12} className="outer-dashboard inner-dashboard favorites-row">
                            <h5>
                                Favorites
                            </h5>
                            <div className="first-listing">
                                
                                <div >
                                <Image src="https://source.unsplash.com/KJMz5Tmbw0k/140x140/" rounded />
                                <h6>The Game of Life</h6>
                                </div>

                                <div>
                                <Image src="https://source.unsplash.com/mxsXtGVjiBg/140x140/" rounded />
                                <h6>Ravensburger Field Puzzle</h6>
                                </div>

                                <div>
                                <Image src="https://source.unsplash.com/scPpnskdiAU/140x140/" rounded />
                                <h6>Doves Puzzle</h6>
                                </div>

                                <div>
                                <Image src="https://source.unsplash.com/X-A-LJVAhzk/140x140/" rounded />
                                <h6>Dungeons and Dragons Board Game</h6>
                                </div>
                        </div>
                            

                        </Col>
                    </Row>
                </Container>


                    


                /* <div style={{ height: "75vh" }} className="container valign-wrapper">
                    <div className="row">
                    <div className="col s12 center-align">
                        <h4>
                        <b>Hey there,</b> {user.name.split(" ")[0]}
                        <p className="flow-text grey-text text-darken-1">
                            You are logged into a full-stack{" "}
                            <span style={{ fontFamily: "monospace" }}>MERN</span> app 👏
                        </p>
                        </h4>
                        <button
                        style={{
                            width: "150px",
                            borderRadius: "3px",
                            letterSpacing: "1.5px",
                            marginTop: "1rem"
                        }}
                        onClick={this.onLogoutClick}
                        className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                        >
                        Logout
                        </button>
                    </div>
                    </div>
 */
            );
    }
}

Dashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(Dashboard);