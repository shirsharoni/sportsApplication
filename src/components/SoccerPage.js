// components/SoccerPage.js
import React from 'react';
import soccerMatch from '../soccer-match.svg'
import '../App.css';

function SoccerPage() {
  return (
    <div>
      <img className='soccer-field' src={soccerMatch} alt="soccer" width="100%"/>
    </div>
  );
}

export default SoccerPage;
