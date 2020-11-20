import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import { Container, Row, Col } from 'react-bootstrap';

class Dashboard extends Component {

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };
    
    render() {
        
        const { user } = this.props.auth;
            return (
                
                <Container>
                    < br />
                    < br />
                    <Row className="form-group">
                        {/* form-group adds 15px margin to bottom of row */}
                        <Col sm={3} className="form-group ml-0 mr-1 outer-dashboard profile-dashboard inner-dashboard" > 
                            <div className=" mx-3">
                                <h5>
                                    {user.name.split(" ")[0]}
                                </h5>
                            </div>
                            
                        </Col>
                        < br />


                        <Col sm={3} className="form-group outer-dashboard bio-dashboard  inner-dashboard">
                            <div className=" mx-3">
                                <h5>
                                    Bio
                                </h5>
                            </div>
                            < br />

                            
                        </Col>

                        <Col sm={3} className="form-group mr-0 ml-1 outer-dashboard stats-dashboard  inner-dashboard">
                            <div className=" mx-3">
                                <h5>
                                    Stats
                                </h5>
                            </div>

                        
                        </Col>
                            
                    </Row>
                    < br />
                    < br />


                    {/* Active listings row */}
                    <Row className="form-group">
                        <Col sm={12} className="outer-dashboard inner-dashboard">
                            <h5>
                                Active Listings
                            </h5>
                        </Col>
                    </Row>

                    < br />
                    < br />

                    {/* Favorites row */}
                    <Row className="form-group">
                        <Col sm={12} className="outer-dashboard inner-dashboard">
                            <h5>
                                Favorites
                            </h5>
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