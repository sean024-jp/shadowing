// ResultScreen.js
import React from 'react';
import { Link } from 'react-router-dom';

function ResultScreen() {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>結果表示画面</h1>
      <p>ゲームの結果がここに表示されます。</p>
      {/* ホーム画面に戻るリンク */}
      <Link to="/">
        <button>ホームに戻る</button>
      </Link>
    </div>
  );
}

export default ResultScreen;
