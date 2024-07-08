import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const UpdateUser = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate()
  const {id} = useParams()

  useEffect(()=>
    {
        axios.get("http://127.0.0.1:3001/UpdateUser/"+id)
        .then(res => {
          console.log("Server  data updated:-",res)
          setName(res.data.name)
          setAge(res.data.age)  
          setEmail(res.data.email)
        })
        .catch(err=> console.log("Server unavaiable to update data :-",err))
        
    },[])
const HandleUpdate = (e)=>
{
  e.preventDefault()
  const userData = { name, age, email };
  console.log("Submitting User Data:", userData); // Log the data being submitted
  axios.put("http://127.0.0.1:3001/UpdateUser/"+id, userData)
    .then(res => {console.log("Response from server", res);
      
        navigate("/");
      
    })
    .catch(err => console.log("Error from server -:", err));
}


  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
    <div className='w-50 bg-white rounded-3 p-3'>
    <h3>Update User</h3>   
      <div className='d-flex justify-content-around'>
      <Link to="/"><button className='btn btn-success'>Over View of users</button></Link>
      {/* <Link to="/DeleteUser"></Link><button className='btn btn-success'>Delete User</button> */}
      </div>
    <form onSubmit={HandleUpdate}>
      
      <div className='mb-2'>
        <label>Name</label><input className='form-control' placeholder='Enter your Name' value={name} onChange={(e) => setName(e.target.value)}/>
      </div>

      <div className='mb-2'>
        <label>Email</label><input className='form-control' placeholder='Enter your Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
      </div>


      <div className='mb-2'>
        <label>Age</label><input className='form-control' placeholder='Enter your Age' value={age} onChange={(e) => setAge(e.target.value)}/>
      </div> 
      <button className='btn btn-success'>Update User</button>  
    </form>
    </div>
  </div>
  )
}

export default UpdateUser