// HomeScreen.js
import React from 'react';
import { Link } from 'react-router-dom'; // React Router を使っている場合

function HomeScreen() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>My Shadowing App</h1>
      <p style={styles.description}>
        このアプリは英語学習者向けのシャドーイングツールです。  
        自分の投稿した音声素材で学習を進め、人気のある教材を見つけましょう！
      </p>
      {/* ゲーム画面または次の画面へのリンク */}
      <Link to="/game">
        <button style={styles.button}>スタート</button>
      </Link>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '40px',
    padding: '20px'
  },
  title: {
    fontSize: '2.5em',
    marginBottom: '20px'
  },
  description: {
    fontSize: '1.2em',
    marginBottom: '30px',
    lineHeight: '1.6'
  },
  button: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1em'
  }
};

export default HomeScreen;