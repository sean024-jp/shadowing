// HelloScreen.js
import React, { useState } from 'react';

function HelloScreen() {
  // 結果表示用の状態変数を用意
  const [result, setResult] = useState('');

  // Yesボタンが押されたときの処理
  const handleYes = () => {
    // ここでは「空は青い」という前提で、Yesなら正解とする
    setResult('正解！');
  };

  // Noボタンが押されたときの処理
  const handleNo = () => {
    setResult('不正解！');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Welcome to My Shadowing App!</h1>
      <p>空は青いですか？</p>
      <button onClick={handleYes}>Yes</button>
      <button onClick={handleNo}>No</button>
      {result && <h2>{result}</h2>}
    </div>
  );
}

export default HelloScreen;
