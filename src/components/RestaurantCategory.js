import React, { useState } from "react";
import ItemList from "./ItemList";

function RestaurantCategory({data, showItems , setShowIndex}) {
 
  const handleClick = ()=>
  {
    setShowIndex();
  }
 // just check
  return (
    
      <div className="p-4 mx-auto my-4 max-w-6xl rounded-xl  shadow-xl bg-stone-200-300 border-solid border-4 border-white">
        <div className="flex flex-wrap justify-between cursor-pointer" onClick={handleClick}>
        <div className="">
          <span className="font-bold ">
            {data.title} ({data.itemCards.length})
          </span>
        </div>

        <div className="">⏬</div>
        </div>

    
        <div>
        {showItems && <ItemList items={data.itemCards} />}
        </div>
      
      </div>
     
    
  );
}

export default RestaurantCategory;
