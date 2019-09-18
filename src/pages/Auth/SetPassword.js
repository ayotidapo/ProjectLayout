/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { connect } from 'react-redux';
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';

import Loader from 'react-loader-spinner';

import toastr from 'toastr';
import { setNewPassword } from '../../redux/actions/authActions';
import isEmpty from '../../helpers/is-empty';
import './auth.css';

class SetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password1: '',
      password2: '',
      err: '',
    };
  }

  componentDidMount() {
    if (this.props.location.search.includes('token')) {
      const token = this.props.location.search.split('?token=')[1];
      localStorage.token = token;
      if (jwt_decode(token)) {
        localStorage.id = jwt_decode(token).id;
      }
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value, err: '' });
  };

  setNewPassword = e => {
    e.preventDefault();

    const { password1, password2 } = this.state;
    if (isEmpty(password1)) {
      toastr.error('Please fill all fields');
      return false;
    }

    if (password1 !== password2) {
      toastr.error('Passwords do not match');
      return false;
    }

    this.props.setNewPassword({ password: password1 });
  };

  render() {
    const { password1, password2, err } = this.state;

    return (
      <div className="Auth login-layout-section">
        <div className="login-layout">
          <div className="absolute-top-center">
            <img src="/uploads/icons/covenant-logo.png" alt="Covenant Logo" />
          </div>
          <h1 className>Set your Password</h1>
          <p className="smalltext mb-2 fw-normal tx-c lh-2">
            Please set your new password below.
          </p>
          <div className="form-box">
            <form action onSubmit={this.setNewPassword}>
              <label htmlFor="Password" className="mt-2">
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
                  name="password1"
                  id="password1"
                  value={password1}
                  placeholder="Enter password here"
                  onChange={this.onChange}
                />
              </div>
              <label htmlFor="Confirm password" className="mt-1h">
                Confirm password
              </label>
              <div className="uk-inline width-100-pc">
                <span className="uk-form-icon">
                  <svg className="icon-18">
                    <use xlinkHref="/uploads/icons.svg#password" />
                  </svg>
                </span>
                <input
                  type="password"
                  name="password2"
                  id="password2"
                  value={password2}
                  placeholder="Re-type password here"
                  onChange={this.onChange}
                />
              </div>
              <button
                className="btn btn-next mt-2 mt-2custom"
                disabled={this.props.auth.settingNewPassword}
              >
                {this.props.auth.settingNewPassword ? (
                  <Loader type="Puff" color="white" height="30" width="30" />
                ) : (
                  'Setup account'
                )}
              </button>
            </form>
          </div>
          {/* <div class=" absolute-abv-bottom">
            
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
  mapStateToProps,
  { setNewPassword },
)(SetPassword);
