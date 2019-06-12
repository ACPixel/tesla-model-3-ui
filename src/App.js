import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MainHud from './components/MainHud';
import Settings from './components/Settings';

function AppRouter() {
  return (
    <Router>
      <Route path="/" component={MainHud} />
      <Route path="/settings/" component={Settings} />
    </Router>
  );
}

export default AppRouter;
