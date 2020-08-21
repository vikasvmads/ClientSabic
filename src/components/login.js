import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";


class login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            errors: {}
        }
    }
    onchange = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    };

    onSubmit = (e) => {
        e.preventDefault();
        const userData = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.loginUser(userData)
    }

    render() {
        const { errors } = this.state;
        return (
            <div className="container">
            </div>
        );
    }
}
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(login);

