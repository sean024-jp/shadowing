// App.js
import React from 'react';
import './App.css';
import HelloScreen from './HelloScreen';
import SimpleCounter from './SimpleCounter';

function App() {
  return (
    <div className="App">
      <div className="puzzle-container">
        <HelloScreen />
        <SimpleCounter />
      </div>
    </div>
  );
}

export default App;

