import React from 'react';
import logo from './logo.svg';
import './App.css';

import ColorChange from './component/animation/TextAnimation/TestColor/ColorChange';

const App = () => {
  return (
    <div className="App">
      <ColorChange text='john' bgColor = {{in : 'blue', out : 'red', time : 2}} color = {{in : 'red', out : 'blue', time : 4}}/>
    </div>
  );
}

export default App;
