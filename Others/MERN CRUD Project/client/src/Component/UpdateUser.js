import React from 'react'
import { Link } from 'react-router-dom'

const UpdateUser = () => {
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
    <div className='w-50 bg-white rounded-3 p-3'>
    <h3>Update User</h3>   
      <div className='d-flex justify-content-around'>
      <Link to="/"><button className='btn btn-success'>Over View of users</button></Link>
      {/* <Link to="/DeleteUser"></Link><button className='btn btn-success'>Delete User</button> */}
      </div>
    <form>
      
      <div className='mb-2'>
        <label>Name</label><input className='form-control' placeholder='Enter your Name'/>
      </div>

      <div className='mb-2'>
        <label>Email</label><input className='form-control' placeholder='Enter your Email'/>
      </div>


      <div className='mb-2'>
        <label>Age</label><input className='form-control' placeholder='Enter your Age'/>
      </div> 
      <button className='btn btn-success'>Update User</button>  
    </form>
    </div>
  </div>
  )
}

export default UpdateUser