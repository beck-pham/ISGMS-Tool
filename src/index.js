import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import Admin from 'layouts/Admin/Admin.js';

import 'assets/scss/isgms-dashboard-react.scss';
import 'assets/css/nucleo-icons.css';

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route path="/admin" render={props => <Admin {...props} />} />
      <Redirect from="/" to="/admin/home" />
    </Switch>
  </Router>,
  document.getElementById('root')
);
