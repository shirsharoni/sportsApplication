// components/BasketballPage.js
import React from 'react';
import basketballMatch from '../basketball-match.svg'
import '../App.css';

function BasketballPage() {
  return (
    <div>
      <img className='basketball-field' src={basketballMatch} alt="basketball" width="100%"/>
    </div>
  );
}

export default BasketballPage;


