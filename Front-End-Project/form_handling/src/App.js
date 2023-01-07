import React from 'react';
import './App.css';
import AddUser from './Component/Users/AddUser';
import UsersList from './Component/Users/UsersList';
function App() {
  return (
    <div className="">
        <AddUser/>
        <UsersList users = {[]}/>

    </div>
  );
}

export default App;
