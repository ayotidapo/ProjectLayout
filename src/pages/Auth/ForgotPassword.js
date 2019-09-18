import React, { Component } from 'react';
import './auth.css';

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="Auth login-layout-section">
        <div className="login-layout">
          {/* Login Stage */}
          <div className="absolute-top-center">
            <img src="/uploads/icons/covenant-logo.png" alt="Covenant Logo" />
          </div>
          <div className="mt-2 mb-2">
            <svg className="icon-60">
              <use xlinkHref="/uploads/icons.svg#lock" />
            </svg>
          </div>
          <h1 className>Forgot your password?</h1>
          <p className="smalltext mb-2 fw-normal tx-c lh-2">
            Enter the email address and we’ll send you instructions to reset
            your password.
          </p>

          <label htmlFor="Email Address or Phone number" className="mt-2">
            Email Address or Phone number
          </label>
          <div className="uk-inline width-100-pc">
            <span className="uk-form-icon">
              <svg className="icon-18">
                <use xlinkHref="/uploads/icons.svg#mail" />
              </svg>
            </span>
            <input type="text" placeholder="example@mtn.com or 0800000000" />
          </div>
          <button className="btn btn-next mt-2 mt-2custom">Send</button>

          <p className="smalltext in-block">
            Remember your password?
            <a href="/login" className="mt-1 smalltext co-primary">
              Sign in
            </a>
          </p>
          {/* <div class=" absolute-abv-bottom">
                
            </div> */}
          {/* footer */}
          <div className="tx-c absolute-bottom">
            <p className="co-sweetgray smalltext">Powered by Koya</p>
          </div>
          {/* <div class="tx-c absolute-bottom">
                <p class="co-raisinblack smalltext">
                    Remember your password? <a href="/login/sign-in" class="co-raisinblack">Log In</a>
                </p>
            </div> */}
        </div>
      </section>
    );
  }
}

export default ForgotPassword;
