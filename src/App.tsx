import React from 'react';
import './App.css';
import StarRating from './components/StarRating';

function App() {
  return (
    <div className="App">
      <StarRating />
      <StarRating defaultState={4} />
      <StarRating emptyColor='red' />
      <StarRating fillColor='green' defaultState={3} />
      <StarRating width={20} height={20} />
      <StarRating maxValue={10} />
      <StarRating labelText={(text) => `O valor é: ${text}`} />
      <StarRating readOnly defaultState={6} maxValue={10} />
    </div>
  );
}

export default App;
