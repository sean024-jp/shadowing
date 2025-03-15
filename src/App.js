// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './HomeScreen';
import GameScreen from './GameScreen';
import ResultScreen from './ResultScreen';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/game" element={<GameScreen />} />
          <Route path="/result" element={<ResultScreen />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;