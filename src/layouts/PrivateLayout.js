import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class PrivateLayout extends Component {
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
          if (auth.isAuthenticated) {
            return <Component {...props} />;
          }
          // enable this line below to make route protected
          return <Redirect to="/login" />;
        }}
      />
    );
  }
}

const mapStateToProps = state => ({ auth: state.auth });

export default connect(
  mapStateToProps,
  {},
)(PrivateLayout);
