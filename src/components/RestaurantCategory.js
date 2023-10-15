import React from "react";
import ItemList from "./ItemList";

function RestaurantCategory(props) {
  console.log(props.data);
  return (
    
      <div className="p-4 mx-auto my-4 max-w-6xl rounded-xl  shadow-xl bg-stone-200-300 border-solid border-4 border-white">
        <div className="flex flex-wrap justify-between">
        <div className="">
          <span className="font-bold ">
            {props.data.title} ({props.data.itemCards.length})
          </span>
        </div>

        <div className="">⏬</div>
        </div>

    
        <div>
        <ItemList items={props.data.itemCards} />
        </div>
      
      </div>
     
    
  );
}

export default RestaurantCategory;
