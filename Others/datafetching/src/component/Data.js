import React,{useState , useEffect} from 'react'
import axios from "axios"
function Data() {
    const [id , setId] = useState(1);
    const [Post , setPost] = useState({});
    useEffect(()=>
    {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(function(response)
        {
            setPost(response.data)
            console.log(response);
        }).catch(function(error)
        {
            console.log(error);
        })
    },[id])
    const handleInput = (e) =>
    {
        setId(e.target.value)
    }
  return (
    <div>
        <input type="text" value = {id} onChange={handleInput}></input>
        <div>
            <li>
                {Post.title}
            </li>
        </div>
    </div>
  )
}

export default Data