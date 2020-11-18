import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../actions/authActions";
import classnames from "classnames";
import { Container, Form, Button } from "react-bootstrap";

class Register extends Component {
    
    constructor() {
        super();
        this.state = {
        name: "",
        email: "",
        password: "",
        password2: "",
        errors: {}
        };
    }

    componentDidMount() {
        // If logged in and user navigates to Register page, 
        // should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/dashboard");
        }
    }

    // FIXME: This function call is deprecated. remove the UNSAFE_ prefix
    // and read the error code. need to go fix this later somehow idk
    UNSAFE_componentWillReceiveProps(nextProps) {
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

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };

        console.log(newUser);

        this.props.registerUser(newUser, this.props.history); 
    };

    

    render() {
        const { errors } = this.state;

    return (
        <div className="outer">
            <div className="inner">

                <Container>

                <Form noValidate onSubmit={this.onSubmit}>

                    {/* this is called forgot-password but its just
                    left that way bc im lazy and it already looks fine.
                    even though the text doesnt even say forgot password. */}
                <p className="forgot-password text-right">
                        {/* FIXME: need to make this forgot pw page still */}
                        Already signed up? <a href="/login">Sign in.</a>
                    </p>
                    <h1>Register</h1>

                    

                    <hr />

                    <Form.Group controlId="name">
                        <Form.Label>Full name</Form.Label>

                        {/* simple validation checks here. 
                        should be nothing in the error field, and we set
                        if its invalid or valid depending on the error values */}
                        <Form.Control 
                            type="name" 
                            placeholder="Name"
                            onChange={this.onChange}
                            error={errors.name}
                            isInvalid={
                                errors.name
                            }
                        />

                        <Form.Control.Feedback className="feedback-text" type="invalid">
                            {errors.name}
                        </Form.Control.Feedback>

                        {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>


                    <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>

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
                                (errors.email == null)
                            }
                        />

                        <Form.Control.Feedback className="feedback-text" type="invalid">
                            {errors.email}
                        </Form.Control.Feedback>

                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>

                        {/* simple validation checks here. 
                        should be nothing in the error field, and we set
                        if its invalid or valid depending on the error values */}
                        <Form.Control 
                            type="password" 
                            placeholder="Enter password"
                            onChange={this.onChange}
                            error={errors.password}
                            isInvalid={
                                errors.password
                            }
                            isValid={
                                this.password &&
                                (errors.password == null)
                            }
                        />

                        <Form.Control.Feedback className="feedback-text" type="invalid">
                            {errors.password}
                        </Form.Control.Feedback>

                    </Form.Group>


                    <Form.Group controlId="password2">
                        <Form.Label>Confirm password</Form.Label>

                        {/* simple validation checks here. 
                        should be nothing in the error field, and we set
                        if its invalid or valid depending on the error values */}
                        <Form.Control 
                            type="password" 
                            placeholder="Confirm password"
                            onChange={this.onChange}
                            error={errors.password2}
                            isInvalid={
                                errors.password2
                            }
                            isValid={
                                this.password2 &&
                                (errors.password2 == null)
                            }
                        />

                        <Form.Control.Feedback className="feedback-text" type="invalid">
                            {errors.password2}
                        </Form.Control.Feedback>

                    </Form.Group>

                            

                    <Button className="submit-button" variant="primary" type="submit">
                        Submit
                    </Button>
                    

                </Form>

                </Container>



        {/* <div className="container">
            <div className="row">
            <div className="col s8 offset-s2">
                <Link to="/" className="btn-flat waves-effect">
                <i className="material-icons left">keyboard_backspace</i> Back to
                home
                </Link>
                <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <h4>
                    <b>Register</b> below
                </h4>
                <p className="grey-text text-darken-1">
                    Already have an account? <Link to="/login">Log in</Link>
                </p>
                </div>
                <form noValidate onSubmit={this.onSubmit}>
                <div className="input-field col s12">
                    <input
                    onChange={this.onChange}
                    value={this.state.name}
                    error={errors.name}
                    id="name"
                    type="text"
                    className={classnames("", {
                        invalid: errors.name
                    })}
                    />
                    <label htmlFor="name">Name</label>
                    <span className="red-text">{errors.name}</span>
                </div>
                <div className="input-field col s12">
                    <input
                    onChange={this.onChange}
                    value={this.state.email}
                    error={errors.email}
                    id="email"
                    type="email"
                    className={classnames("", {
                        invalid: errors.email
                    })}
                    />
                    <label htmlFor="email">Email</label>
                    <span className="red-text">{errors.email}</span>
                </div>
                <div className="input-field col s12">
                    <input
                    onChange={this.onChange}
                    value={this.state.password}
                    error={errors.password}
                    id="password"
                    type="password"
                    className={classnames("", {
                        invalid: errors.password
                    })}
                    />
                    <label htmlFor="password">Password</label>
                    <span className="red-text">{errors.password}</span>
                </div>
                <div className="input-field col s12">
                    <input
                    onChange={this.onChange}
                    value={this.state.password2}
                    error={errors.password2}
                    id="password2"
                    type="password"
                    className={classnames("", {
                        invalid: errors.password2
                    })}
                    />
                    <label htmlFor="password2">Confirm Password</label>
                    <span className="red-text">{errors.password2}</span>
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
                    Sign up
                    </button>
                </div>
                </form>
            </div>
            </div>
        </div> */}
        </div>
        </div>
        );
    }
}

// since we cant define types in our constructor, its considered 
// good convention to do so using the prop-types package
Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

// new login: had to add this bc getting errors before
Register.defaultProps = {
    errors: '',
}

// allows us to get our state from Redux and map it to 
// props which we can use inside components
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

// Wrapping our Reigster with withRouter is so we can redirect without 
//having to be inside of a component and use this.props.history.push etc blah
// We connect React components to our Redux Store 
// Provided by the Provider component. 
export default connect(
    mapStateToProps,
    { registerUser }
)(withRouter(Register));

