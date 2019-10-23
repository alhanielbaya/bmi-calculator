import React from 'react';

import styles from './App.module.scss';

import Calculator from './components/Calculator/Calculator';

function App() {
  return (
    <div className={styles.container}>
      <Calculator></Calculator>
    </div>
  );
}

export default App;
