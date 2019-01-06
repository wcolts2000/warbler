import React, { Component } from "react";

export default class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emails: "",
      username: "",
      password: "",
      profileImageUrl: ""
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const authType = this.props.signUp ? "signup" : "signin";
    this.props.onAuth(authType, this.state).then(() => {
      console.log("LOGGEDIN");
    });
  };

  render() {
    const { email, username, password, profileImageUrl } = this.state;
    const { heading, buttonText, signUp } = this.props;
    return (
      <div>
        <div className="row justify-content-md-center text-center">
          <div className="col-md-6">
            <form onSubmit={this.handleSubmit}>
              <h2>{heading}</h2>
              <label htmlFor="email">Email:</label>
              <input
                className="form-control"
                id="email"
                type="text"
                name="email"
                onChange={this.handleChange}
                value={email}
              />
              <label htmlFor="password">Password:</label>
              <input
                className="form-control"
                id="password"
                type="password"
                name="password"
                onChange={this.handleChange}
              />
              {signUp && (
                <>
                  <label htmlFor="username">Username:</label>
                  <input
                    className="form-control"
                    id="username"
                    type="text"
                    name="username"
                    onChange={this.handleChange}
                    value={username}
                  />
                  <label htmlFor="image-url">Image URL:</label>
                  <input
                    className="form-control"
                    id="image-url"
                    type="text"
                    value={profileImageUrl}
                    name="profileImageUrl"
                    onChange={this.handleChange}
                  />
                </>
              )}
              <button
                type="submit"
                className="btn btn-primary btn-block btn-lg"
              >
                {buttonText}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
