import React from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Homepage from "../components/Homepage";
import AuthForm from "../components/AuthForm";
import { authUser } from "../store/actions/auth";

const Main = props => {
  const { authUser } = props;
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" render={props => <Homepage {...props} />} />
        <Route
          exact
          path="/signin"
          render={props => (
            <AuthForm
              {...props}
              onAuth={authUser}
              buttonText="Login"
              heading="Welcome Back"
            />
          )}
        />
        <Route
          exact
          path="/signup"
          render={props => (
            <AuthForm
              {...props}
              onAuth={authUser}
              buttonText="Sign Me Up"
              signUp
              heading="Join Warbler"
            />
          )}
        />
      </Switch>
    </div>
  );
};
const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { authUser }
  )(Main)
);
