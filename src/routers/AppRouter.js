import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import NotFound from '../pages/NotFound/NotFound';
import Home from '../pages/Home/Home';
import Gallery from '../pages/Gallery/Gallery';
import HowTo from '../pages/HowTo/HowTo';

export default () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path='/' component={Home} exact={true} />
        <Route path='/gallery' component={Gallery} />
        <Route path='/howto' component={HowTo} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);