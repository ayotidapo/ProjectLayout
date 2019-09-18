/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
// import history from 'helpers/history';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import Loader from 'react-loader-spinner';

import toastr from 'toastr';
import 'pages/Auth/auth.css';

import isEmpty from '../../helpers/is-empty';
// import './auth.css';

class SetupAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: localStorage.getItem('email'),
      code: '',
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitVerificationCode = e => {
    e.preventDefault();

    const { code, email } = this.state;
    // const data = { email: email, code: verificationCode };

    if (isEmpty(code) /* || isEmpty(email) || !Validator.isEmail(email) */) {
      toastr.error('Enter your verification code ');
      return;
    }

    // console.log(code);

    this.props.verifyCode({ email, code });
  };

  render() {
    const { email, code } = this.state;

    return (
      <div className="Auth login-layout-section">
        <div className="login-layout">
          {/* Login Stage */}
          <div className="absolute-top-center">
            <img src="/uploads/icons/covenant-logo.png" alt="Covenant Logo" />
          </div>
          <h1>Setup your account</h1>
          <p className="smalltext mb-2 fw-normal tx-c lh-2">
            Hey there! Seems that this is your first time here. A verification
            code has been sent to your email, please enter it below.
          </p>
          <div className="form-box">
            <form>
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
                  type="text"
                  name="email"
                  value=""
                  placeholder="Email address"
                  readOnly
                />
              </div>
              <label htmlFor="Verification Code" className="mt-1h">
                Verification Code
              </label>
              <div className="uk-inline width-100-pc">
                <span className="uk-form-icon">
                  <svg className="icon-18">
                    <use xlinkHref="/uploads/icons.svg#password" />
                  </svg>
                </span>
                <input
                  type="text"
                  name="code"
                  value={code}
                  placeholder="Verification Code"
                  onChange={this.onChange}
                />
              </div>
              <button className="btn btn-next mt-2 mt-2custom">Next</button>
            </form>
          </div>
          <p className="smalltext">
            Aleady have an account?
            <Link to="/login" className="mt-1 smalltext co-primary">
              Sign in
            </Link>
          </p>
          {/*



        <!-- <div class=" absolute-abv-bottom">
            
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

// const mapStateToProps = state => ({
//   auth: state.auth,
//   email: state.auth.email,
// });
// const mapDispatchToProps = dispatch => ({
//   verifyCode: data => dispatch(verifyCode(data)),
// });

export default connect(
  null,
  null,
)(SetupAccount);
