import React from 'react';

import './style.css';

import Child1 from './Child1';
import Child2 from './Child2';

function App() {
  return (
    <div className='app'>
      <header className='app-header'>
        Hello Vite + React + Redux!
      </header>
      <div className='container'>
        <Child1 />
        <Child2 />
      </div>
    </div>
  );
}

export default App;
