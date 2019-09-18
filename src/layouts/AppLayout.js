/* eslint-disable no-unused-vars */
import React, { lazy, Suspense } from 'react';
import classnames from 'classnames';
import { Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PageLoader from 'components/common/PageLoader';
import Sidebar from 'layouts/AppLayoutComponent/Sidebar';
import Navbar from 'layouts/AppLayoutComponent/Navbar';

const GetStarted = lazy(() => import('pages/Auth/GetStarted'));
const SetupAccount = lazy(() => import('pages/Auth/SetupAccount'));

class AppLayout extends React.Component {
  state = {
    sample: 1,
    open: window.matchMedia('(min-width: 1024px)').matches || false,
  };

  componentDidUpdate(_prevProps, prevState) {
    const { open } = this.state;
    if (prevState.open !== open) {
      if (open && window.matchMedia('(max-width: 768px)').matches) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
    }
  }

  ontoggleSideBar = () => {
    this.setState(prevState => ({
      open: !prevState.open,
    }));
  };

  render() {
    const { sample, open } = this.state;
    const { match } = this.props;
    const mobile = window.matchMedia('(max-width: 768px)').matches;
    return (
      <>
        <div className="navHeaderWrap">
          <Navbar sample={sample} ontoggleSideBar={this.ontoggleSideBar} />
        </div>
        <div className="bodyWrap">
          <div className={classnames({ blur: mobile && open })} />
          <Sidebar ontoggleSideBar={this.ontoggleSideBar} open={open} />

          <div
            className={classnames(
              'main',
              { mainShrink: open },
              { mainExpand: !open },
            )}
          >
            <Suspense fallback={<PageLoader color="#ccc" />}>
              <Switch>
                <Route
                  exact
                  path={`${match.url}/get-started`}
                  component={GetStarted}
                />
                <Route
                  exact
                  path={`${match.url}/setup-account`}
                  component={SetupAccount}
                />

                <Redirect to={`${match.url}/get-started`} />
              </Switch>
            </Suspense>
          </div>
        </div>
      </>
    );
  }
}

// const mapDispatchToProps = dispatch => ({
//   logout: () => dispatch(logOutUser()),
// });
// const mapStateToProps = state => ({
//   userId: state.auth.user._id,
//   user: state.auth.user,
// });
export default connect(
  null,
  null,
)(AppLayout);
