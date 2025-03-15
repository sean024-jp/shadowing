// HomeScreen.js
import React from 'react';
import { Link } from 'react-router-dom';

function HomeScreen() {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>ホーム画面</h1>
      <p>このアプリへようこそ！</p>
      {/* ゲーム画面へ遷移するリンク */}
      <Link to="/game">
        <button>ゲーム開始</button>
      </Link>
    </div>
  );
}

export default HomeScreen;