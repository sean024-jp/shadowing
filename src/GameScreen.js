// GameScreen.js
import React from 'react';
import { Link } from 'react-router-dom';

function GameScreen() {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>ゲーム画面</h1>
      <p>ここでゲームのロジックが動作します。</p>
      {/* 結果表示画面へ遷移するリンク */}
      <Link to="/result">
        <button>結果を見る</button>
      </Link>
    </div>
  );
}

export default GameScreen;
