import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import NotFound from '../pages/NotFound/NotFound';
import Home from '../pages/Home/Home';

export default () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path='/' component={Home} exact={true} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);