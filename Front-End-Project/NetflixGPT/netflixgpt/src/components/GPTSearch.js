import React, { useRef } from 'react'
import "../AllCSS/GPT.css"
import openai from '../utils/OpenAI'
const GPTSearch = () => {
  const GPTInput = useRef(null)

const HandleGPTClick = async()=>
{

  console.log(GPTInput.current.value)

  const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      GPTInput.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const GPTResult = await openai.chat.completions.create({
      messages: [{ role: 'user', content:gptQuery }],
      model: 'gpt-3.5-turbo',
    });


  if(!GPTResult.choices)
  {
    console.log(GPTResult.choices)

  }
  }


 

  

  return (
    <form className="GPTSearch" onSubmit={e => e.preventDefault()}>
        <input className="GPTInput" ref={GPTInput} type='text' placeholder='What would you like to watch today?'/>
        <button className="Search" onClick={HandleGPTClick}>Search</button>
    </form>
  )
}

export default GPTSearch