import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
    const userData = { name, age, email };
    console.log("Submitting User Data:", userData); // Log the data being submitted
    axios.post("http://127.0.0.1:3001/CreateUser", userData)
      .then(res => {console.log("Response from server", res);
        
          navigate("/");
        
      })
      .catch(err => console.log("Error from server -:", err));
  }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded-3 p-3'>
        <div className='d-flex justify-content-around'>
          <Link to="/"><button className='btn btn-success'>Overview of Users</button></Link>
          <Link to="/UpdateUser"><button className='btn btn-success'>Update User</button></Link>
        </div>
        <form onSubmit={handleSubmit}>
          <h2>Create User</h2>
          <div className='mb-2'>
            <label>Name</label>
            <input
              className='form-control'
              placeholder='Enter your Name'
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className='mb-2'>
            <label>Email</label>
            <input
              className='form-control'
              placeholder='Enter your Email'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className='mb-2'>
            <label>Age</label>
            <input
              className='form-control'
              placeholder='Enter your Age'
              onChange={(e) => setAge(e.target.value)}
              value={age}
            />
          </div>   
          <button className='btn btn-success'>Create User</button>   
        </form>
      </div>
    </div>
  );
}

export default CreateUser;
