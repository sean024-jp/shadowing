// App.js
import React, { useRef } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import HomeScreen from './HomeScreen';
import GameScreen from './GameScreen';
import ResultScreen from './ResultScreen';
import './App.css';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

function AppContent() {
  const location = useLocation();
  const nodeRef = useRef(null); // nodeRef を作成

  return (
    <SwitchTransition mode="out-in">
      <CSSTransition
        key={location.key}
        nodeRef={nodeRef}
        classNames="fade"
        timeout={300}
      >
        <div ref={nodeRef}>
          <Routes location={location}>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/game" element={<GameScreen />} />
            <Route path="/result" element={<ResultScreen />} />
          </Routes>
        </div>
      </CSSTransition>
    </SwitchTransition>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppContent />
      </div>
    </BrowserRouter>
  );
}

export default App;
