import './App.css';

import React from 'react';

import Counter from './components/Counter';
import Mirror from './components/Mirror';

import CountProvider from './context/Count';

function App() {
  return (
    <>
    <div className="App">
      <CountProvider>
        <Counter />
        --------------------------------------------------------------------------------
        <Mirror />
      </CountProvider>
    </div>
      </>
  );
}

export default App;
