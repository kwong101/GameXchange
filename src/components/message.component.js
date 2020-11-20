import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";
import { Form, Button, Container, } from "react-bootstrap";


function Message(props) {

/*     constructor() {
        super();
        this.state = {
        email: "",
        password: "",
        errors: {}
        };
    }

    componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/dashboard");
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
          this.props.history.push("/dashboard"); // push user to dashboard when they login
        }

        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };
 */
    

    

    return (

        <div className="outer-message">
            <div className="inner-message">
        <Container>
            
            <div>
                <h3>Send message</h3>
                
                
                <Form.Group>
                <Form inline className="form-inline-message mt-3 mb-2">
                    <Form.Label>To: </Form.Label>
                    <Form.Control placeholder="fakeEmail@gmail.com" disabled />
                    </Form> 
                </Form.Group>
                <Form.Group className="message-area mb-2 mt-5">
                    <Form.Control as="textarea" placeholder="Enter message..." 
                        rows={6}
                        //value={this.state.description || ''} 
                        //onChange={this.onChangeDescription}
                    />
                    </Form.Group>
                

                <Button variant="primary" type="submit" className="btn btn-primary">
                    Send message
                </Button>

            </div>
            
        </Container>
        </div>
        </div>
    );
        
        
    }



export default Message;
