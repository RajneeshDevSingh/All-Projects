import React,{useState} from 'react';
import './App.css';
import AddUser from './Component/Users/AddUser';
import UsersList from './Component/Users/UsersList';
function App() {
  const [usersList , setUersList] = useState([]);
 const addUserHandler = (uName , uAge)=>
 {
    setUersList((preUserList) =>
    {
      return [...preUserList , {name : uName , age : uAge , id : Math.random().toString()}];
    })
 }
  return (
    <div className="">
        <AddUser onAddUser = {addUserHandler}/>
        <UsersList users = {usersList}/>

    </div>
  );
}

export default App;
