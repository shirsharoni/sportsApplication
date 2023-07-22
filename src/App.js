import React from 'react';
import { Routes ,Route } from 'react-router-dom';

import Home from './components/Home';
import SoccerPage from './components/SoccerPage';
import BasketballPage from './components/BasketballPage';

function App() {
  return (
    <Routes>
      <Route exact path="/" component={Home} />
      <Route path="/soccer" component={SoccerPage} />
      <Route path="/basketball" component={BasketballPage} />
      {/* Add more routes for other pages as needed */}
    </Routes>
  );
}

export default App;
