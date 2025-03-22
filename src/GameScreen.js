// GameScreen.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function GameScreen() {
  const navigate = useNavigate();

  const handleFinishGame = () => {
    // 仮のスコアを生成（実際のゲームロジックに合わせて変更してください）
    const gameScore = Math.floor(Math.random() * 100);
    // 結果画面へ遷移し、スコアを state として渡す
    navigate('/result', { state: { score: gameScore } });
  };

  return (
    <div className="game-screen" style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>ゲーム画面</h1>
      <p>ここでゲームをプレイします。</p>
      <button onClick={handleFinishGame}>ゲーム終了</button>
    </div>
  );
}

export default GameScreen;
