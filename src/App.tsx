import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Router from './routes';

function App() {
  return (
    <div className="App">
      <Header/>
      <div style={{display: 'flex'}}>
      <Sidebar/>
      <Router />
      </div>
      
    </div>
  );
}

export default App;
