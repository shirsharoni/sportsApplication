import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import soccer from '../soccer.svg';
import basketball from '../basketball.svg';
import '../App.css';

function App() {
  function goToSoccer() {
    console.log('go to soccer');
    window.location = '/soccer';
  }

  function goToBasketball() {
    console.log('go to basketball');
    window.location = '/basketball';
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          What is your favorite sport?
        </p>
        <div class='horizontal'>
          <div class='vertical'>
            <img src={soccer} className="App-logo" alt="logo" />
            <Button onClick={goToSoccer}>
              Soccer
            </Button>
          </div>
          <div class="vertical">
            <img src={basketball} className="App-logo" alt="logo" />
            <Button onClick={goToBasketball}
            >
              Basketball
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
