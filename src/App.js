import React from 'react';
import './style.css';
import GrandParentContext from './utils/GrandParentContext';
import Children from './Children';

export default function App() {
  return (
    <div>
      <GrandParentContext.Provider value={{ name: 'dream', age: 15 }}>
        <h1>Hello StackBlitz!</h1>
        <p>Start editing to see some magic happen :)</p>
        <Children />
      </GrandParentContext.Provider>
    </div>
  );
}
