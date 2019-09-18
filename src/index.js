/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/uikit.min.css';
import './css/styles.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import '../node_modules/toastr/build/toastr.min.css';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
