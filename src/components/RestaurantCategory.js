import React from 'react'



function RestaurantCategory(props) {
    console.log(props.data)
  return (
    <div className="p-4 mx-auto my-4 max-w-6xl flex flex-wrap items-center justify-between rounded-xl  shadow-xl bg-stone-200-300 border-solid border-4 border-white">
       <div> <span className='font-bold '>{props.data.title} ({props.data.itemCards.length})</span></div>

        <div className='icon'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
        </svg>
        </div>
        



  

    </div>
  )
}

export default RestaurantCategory