import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

const User = () => {
    const [userData, setuserData] = useState([])
    useEffect(()=>
    {
        axios.get("http://127.0.0.1:3001")
        .then(res => setuserData(res.data))
        .catch(err=> console.log("Server unavaiale to fetch data :-",err))
        
    },[])

    const HandleDelete =(id)=>
    {
        axios.delete("http://127.0.0.1:3001/deleteUser/"+id)
        .then(res => console.log("Data deleted successfully", res),
                      window.location.reload())
        .catch(err=> console.log("While deleting data some error", err))
    }
  return (
    <div className='d-flex bg-primary justify-content-center align-item-center'>
        <div className='m-5  w-50 bg-white rounded p-5'>
            <Link to="/CreateUser"><button className='btn btn-success'>New user +</button></Link>
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
                            <td><Link to={`/UpdateUser/${user._id}`}><button className='btn btn-success'>Edit</button></Link><button className='btn btn-danger' onClick={(e)=> HandleDelete(user._id)}>Delete</button></td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default User