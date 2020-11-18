import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";
import classnames from "classnames";
import { Form, Button, Container, Jumbotron } from "react-bootstrap";


class Login extends Component {

    constructor() {
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

    onSubmit = e => {
        e.preventDefault();

        const userData = {
            email: this.state.email,
            password: this.state.password
            };

        console.log(userData);

        // since we handle the redirect within our component, 
        //we don't need to pass in this.props.history as a parameter
        this.props.loginUser(userData); 
    };

    render() {
        const { errors } = this.state;

    return (
        <Container>
            
                <Form noValidate onSubmit={this.onSubmit}>
                    <h1>Login</h1>

                    <hr />

                    <Form.Group controlId="email">
                        <Form.Label>Email address</Form.Label>

                        {/* simple validation checks here. 
                        should be nothing in the error field, and we set
                        if its invalid or valid depending on the error values */}
                        <Form.Control 
                            type="email" 
                            placeholder="Enter email"
                            onChange={this.onChange}
                            error={errors.email}
                            isInvalid={
                                errors.email || errors.emailnotfound
                            }
                            isValid={
                                this.email && 
                                errors.email == null
                            }
                        />

                        <Form.Control.Feedback className="feedback-text" type="invalid">
                            {errors.email}
                        </Form.Control.Feedback>

                        {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        
                        <Form.Control 
                            type="password" 
                            placeholder="Password"
                            onChange={this.onChange}
                            error={errors.password} 
                            isInvalid={
                                errors.password || errors.passwordincorrect
                            }
                            isValid={
                                this.password && 
                                errors.password == null
                            }
                        />

                        <Form.Control.Feedback className="feedback-text" type="invalid">
                            {errors.passwordincorrect}
                        </Form.Control.Feedback>

                    </Form.Group>

                    {/* <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group> */}

                    <Button className="submit-button" variant="primary" type="submit">
                        Submit
                    </Button>
                    <p className="forgot-password text-right">
                        {/* FIXME: need to make this forgot pw page still */}
                        Forgot <a href="/">password?</a>
                    </p>

                </Form>
            
        </Container>
    
    );
        
        
    }
}


Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

/* <div className="container">
            <div style={{ marginTop: "4rem" }} className="row">
            <div className="col s8 offset-s2">
                <Link to="/" className="btn-flat waves-effect">
                <i className="material-icons left">keyboard_backspace</i> Back to
                home
                </Link>
                <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <h4>
                    <b>Login</b> below
                </h4>
                <p className="grey-text text-darken-1">
                    Don't have an account? <Link to="/register">Register</Link>
                </p>
                </div>
                <form noValidate onSubmit={this.onSubmit}>
                <div className="input-field col s12">
                    <input
                        onChange={this.onChange}
                        value={this.state.email}
                        error={errors.email}
                        id="email"
                        type="email"
                        className={classnames("", {
                            invalid: errors.email || errors.emailnotfound
                        })}
                    />
                    <label htmlFor="email">Email</label>
                    <span className="red-text">
                        {errors.email}
                        {errors.emailnotfound}
                    </span>
                </div>
                <div className="input-field col s12">
                    <input
                    onChange={this.onChange}
                    value={this.state.password}
                    error={errors.password}
                    id="password"
                    type="password"
                    className={classnames("", {
                        invalid: errors.password || errors.passwordincorrect
                    })}
                    />
                    <label htmlFor="password">Password</label>
                    <span className="red-text">
                    {errors.password}
                    {errors.passwordincorrect}
                </span>
                </div>
                <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                    <button
                    style={{
                        width: "150px",
                        borderRadius: "3px",
                        letterSpacing: "1.5px",
                        marginTop: "1rem"
                    }}
                    type="submit"
                    className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                    >
                    Login
                    </button>
                </div>
                </form>
            </div>
            </div>
        </div> */


export default connect(
    mapStateToProps,
    { loginUser }
)(Login);

