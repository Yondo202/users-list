import React from 'react';
import './Style/Style.css'

import logo from './logo.svg';
import Header from './Component/Header.js'
import Users from './Component/Users.js'
import UsersList from './Component/UserList'
import SearchChat from './Component/SearhChat'
import FilterAll from './Component/FilterAll'


function App() {
  return (
    <div className="App">
      <SearchChat />
      {/* <FilterAll /> */}
      {/* <UsersList /> */}
      {/* <Users /> */}
      {/* <Header /> */}
    </div>
  );
}

export default App;
