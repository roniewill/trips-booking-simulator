import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Booking from './pages/Booking';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/booking" exact component={Booking} />
    </Switch>
  );
}
