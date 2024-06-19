import React, { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

const User = () => {
    const [userData, setuserData] = useState([{name:"RDS",email:"abc@gmail.com",age:24}])
  return (
    <div className='d-flex vh-100  bg-primary justify-content-center align-item-center'>
        <div className='m-5  w-50 bg-white rounded p-5'>
            <Link to="/CreateUser"><button>New user +</button></Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                        {userData.map((user)=> (
                            <tr>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.age}</td>
                            <td><button>Edit</button><button>Delete</button></td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default User