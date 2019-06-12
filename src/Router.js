import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ListCards from './pages/ListCards';
import Registration from './pages/Registration';

export const Routers = () => {
  return (
    <Router>
      <Route exact path="/" component={ListCards} />
      <Route exact path="/add" component={Registration} />
    </Router>
  );
};
