import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';

import './auth.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  doLogin = async e => {
    e.preventDefault();
    // console.log(this.state);
    const { email, password } = this.state;
    this.props.loginUser(
      { email: email.toLocaleLowerCase(), password },
      this.props.history,
    );
  };

  render() {
    const { email, password } = this.state;
    const { auth } = this.props;
    return (
      <div className="Auth login-layout-section">
        <div className="login-layout">
          {/* Login Stage */}
          <div className="absolute-top-center">
            <img src="/uploads/icons/covenant-logo.png" alt="Covenant Logo" />
          </div>
          <h1 className>Welcome Back</h1>
          <p className="smalltext mb-2 fw-normal tx-c lh-2">
            Hey {auth.onboardingUser ? auth.onboardingUser.firstName : ''}, Glad
            to have you back here
          </p>
          {auth.login === 'failed' && (
            <p className="smalltext mb-2 fw-normal tx-c lh-2 co-error letter-space-3 mt--2">
              Your Email and Password combination seems to be incorrect. Try
              again.
            </p>
          )}
          <div className="form-box">
            <form action onSubmit={this.doLogin}>
              <label htmlFor="School Email Address" className="mt-2">
                School Email Address
              </label>
              <div className="uk-inline width-100-pc">
                <span className="uk-form-icon">
                  <svg className="icon-18">
                    <use xlinkHref="/uploads/icons.svg#mail" />
                  </svg>
                </span>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  placeholder=".edu.ng email address"
                  onChange={this.onChange}
                />
              </div>
              <label htmlFor="Password" className="mt-1h">
                Password
              </label>
              <div className="uk-inline width-100-pc">
                <span className="uk-form-icon">
                  <svg className="icon-18">
                    <use xlinkHref="/uploads/icons.svg#password" />
                  </svg>
                </span>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  placeholder="Password"
                  onChange={this.onChange}
                />
              </div>
              <button
                className="btn btn-next mt-2 mt-2custom"
                disabled={this.props.auth.loggingIn}
              >
                {this.props.auth.loggingIn ? (
                  <Loader type="Puff" color="white" height="30" width="30" />
                ) : (
                  'Sign In'
                )}
              </button>
            </form>
          </div>
          <p className="smalltext in-block">
            Forgot your password?
            <Link to="/forgot-password" className="mt-1 smalltext co-primary">
              Click here
            </Link>
          </p>
          {/* <div class=" absolute-abv-bottom">
            
            <a href="/login/forgot-password/" class="mt-1 smalltext co-readablegray">Forgot your password?</a>
            
        </div> */}
          {/* footer */}
          <div className="tx-c absolute-bottom">
            <p className="co-sweetgray smalltext">Powered by Koya</p>
          </div>
          {/* <div class="tx-c absolute-bottom">
            <p class="co-raisinblack smalltext">
                Already have an account? <a href="/login/sign-in" class="co-raisinblack">Sign In</a>
            </p>
        </div> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ auth: state.auth });

export default connect(
  null,
  null,
)(Login);
