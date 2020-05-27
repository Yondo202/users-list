import React from 'react';
import './Style/Style.css'

import logo from './logo.svg';
import Header from './Component/Header.js'
import Users from './Component/Users.js'

function App() {
  return (
    <div className="App">
      <Header />
      <Users />
    </div>
  );
}

export default App;
