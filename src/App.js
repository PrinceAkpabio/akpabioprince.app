import React from 'react';
import { TextStyle } from './Assets/styles/config';
import Naviagtion from './components/navigation/naviagtion';
import HomePage from './pages/home';


function App() {
  return (
    <div className="App"
      style={TextStyle}>
      <Naviagtion />
      <HomePage />
    </div>
  );
}

export default App;
