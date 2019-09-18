import React, { Component } from 'react';
import './auth.css';

class ResetPassword extends Component {
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
          <h1 className>Reset your Password</h1>
          <p className="smalltext mb-2 fw-normal tx-c lh-2" />
          <div className="form-box">
            <form action>
              <label htmlFor="Password Reset code" className="mt-2">
                Password Reset code
              </label>
              <div className="uk-inline width-100-pc">
                <span className="uk-form-icon">
                  <svg className="icon-18">
                    <use xlinkHref="/uploads/icons.svg#" />
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="Enter New Password Reset Code"
                />
              </div>
              <button className="btn btn-next mt-2 mt-2custom">Next</button>
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
                Remember your password? <a href="/login/sign-in" class="co-raisinblack">Log In</a>
            </p>
        </div> */}
        </div>
      </section>
    );
  }
}

export default ResetPassword;
