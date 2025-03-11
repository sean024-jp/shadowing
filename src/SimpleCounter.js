//SimpleCounter.js
import React, { useState } from 'react';

function SimpleCounter() {
  // 結果表示用の状態変数を用意
  const [result, setResult] = useState(0);

  const handlePush = () => {
    setResult(result + 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <p>カウントアップ</p>
      <button onClick={handlePush}>Up</button>
      <h2>{result}</h2>
    </div>
  );
}

export default SimpleCounter;
