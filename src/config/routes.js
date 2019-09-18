/* eslint-disable no-unused-vars */
import React, { lazy, Suspense } from 'react';
import { Router, Redirect, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import PageLoader from 'components/common/PageLoader';
import 'react-toastify/dist/ReactToastify.min.css';
import { connect } from 'react-redux';
import history from 'helpers/history';

const AuthLayout = lazy(() => import('layouts/AuthLayout'));
const PrivateLayout = lazy(() => import('layouts/PrivateLayout'));
const AppLayout = lazy(() => import('layouts/AppLayout'));
const SearchOrganization = lazy(() => import('pages/Auth/SearchOrganization'));
const Login = lazy(() => import('pages/Auth/Login'));

const routes = props => {
  if (props.loadingDetails) {
    return <PageLoader color="#ccc" />;
  }
  return (
    <Router history={history}>
      <ToastContainer />
      <Suspense fallback={<PageLoader color="#ccc" />}>
        <Switch>
          <AuthLayout
            exact
            path={['/', '/search']}
            component={SearchOrganization}
          />

          <PrivateLayout path="/app" component={AppLayout} />
          <AuthLayout exact path="/login" component={Login} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Router>
  );
};

const mapStateToProps = state => ({
  loadingDetails: 0,
});
export default connect(
  mapStateToProps,
  null,
)(routes);
