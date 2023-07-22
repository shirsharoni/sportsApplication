import React from 'react';

import Home from './components/Home';
import SoccerPage from './components/SoccerPage';
import BasketballPage from './components/BasketballPage';


import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/soccer", element: <SoccerPage /> },
    { path: "/basketball", element: <BasketballPage /> },
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;