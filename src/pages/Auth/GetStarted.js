import React, { Component } from 'react';
import { connect } from 'react-redux';
import Validator from 'validator';
import toastr from 'toastr';
import Loader from 'react-loader-spinner';

import isEmpty from '../../helpers/is-empty';

class GetStarted extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitEmail = e => {
    e.preventDefault();
    const { email } = this.state;

    if (isEmpty(email) || !Validator.isEmail(email)) {
      toastr.error('A valid email address is required');
      return;
    }

    this.props.getUserStep({ email });
  };

  render() {
    const { email } = this.state;
    const { auth } = this.props;
    return (
      <div className="login-layout-section">
        <div className="login-layout">
          {/* Login Stage */}
          <div className="absolute-top-center">
            <img src="/uploads/icons/covenant-logo.png" alt="Covenant Logo" />
          </div>
          <h1 className>Get Started</h1>
          <p className="smalltext mb-2 fw-normal tx-c lh-2">
            Enter your school email address to get started
          </p>
          <div className="form-box">
            <form action>
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
                  value={email}
                  placeholder=".edu.ng email address"
                  onChange={this.onChange}
                />
              </div>
              <button className="btn btn-next mt-2" onClick={this.submitEmail}>
                Next
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
// const mapStateToProps = state => ({ auth: state.auth });
// const mapDispatchToProps = dispatch => ({
//   getUserStep: data => dispatch(getUserStep(data)),
// });
export default connect(
  null,
  null,
)(GetStarted);
