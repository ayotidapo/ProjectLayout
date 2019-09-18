/* eslint-disable no-unused-vars */
import React, { Component } from 'react';

class VerificationPrompt extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="login-layout-section">
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
          <h1 className>Create your account</h1>
          <p className="smalltext mb-2 fw-normal tx-c lh-2" />
          <p className="smalltext mb-1i tx-c fw-100 borderyellow lh-1 p-2 ver-box">
            {' '}
            We’ve sent password recovery instructions to your email address
            <br />
            <span className="co-raisinblack">
              &quot;olusesanpeter@gmail.com&quot;
            </span>
          </p>
          <p className="smalltext mb-4i mt-h">
            Remember your Password?{' '}
            <a href="/login/sign-in" className="co-primary">
              Sign in
            </a>
          </p>
          <div className="form-box">
            <form action />
          </div>
          <p className="smalltext">
            Remember your password?
            <a href="/login/sign-in" className="mt-1 smalltext co-primary">
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
                Already have an account? <a href="/login/sign-in" class="co-raisinblack">Sign In</a>
            </p>
        </div> */}
        </div>
      </section>
    );
  }
}

export default VerificationPrompt;
