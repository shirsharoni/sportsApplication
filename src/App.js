import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import soccer from './soccer.svg';
import basketball from './basketball.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          What is your favorite sport?
        </p>
        <div class='horizontal'>
          <div class='vertical'>
            <img src={soccer} className="App-logo" alt="logo" />
            <Button>
              Soccer
            </Button>
          </div>
          <div class="vertical">
            <img src={basketball} className="App-logo" alt="logo" />
            <Button
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
