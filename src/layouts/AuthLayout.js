/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class AuthLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { component: Component, auth, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props => {
          // console.log(auth);
          if (!auth.isAuthenticated) {
            // (or) if (!auth.isAuthenticated && window.localStorage.getItem("jwtoken") === null) {
            return (
              <section className="">
                <Component {...props} />
              </section>
            );
          }
          return <Redirect to="/app" />;
        }}
      />
    );
  }
}

const mapStateToProps = state => ({ auth: state.auth });

export default connect(
  mapStateToProps,
  {},
)(AuthLayout);
