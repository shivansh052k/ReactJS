import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Greet'
import Greet from './components/Greet';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Greet />
      <Welcome />
    </div>
  );
}

export default App;
