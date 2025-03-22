// ResultScreen.js
import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function ResultScreen() {
  // useLocation を使って前画面から渡された state を取得
  const location = useLocation();
  const { score } = location.state || { score: 'N/A' };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>結果表示画面</h1>
      <p>あなたのスコア: {score}</p>
      {/* ホーム画面へ戻るリンク */}
      <Link to="/">
        <button>ホームに戻る</button>
      </Link>
    </div>
  );
}

export default ResultScreen;
