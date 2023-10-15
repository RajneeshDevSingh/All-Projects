import React from "react";
import { CDN_URL } from "./utils/Constants";



const ItemList = ({ items }) => {
  return (
    <div >
      {items.map((item) => (
        
        <div key={item.card.info.id} className="m-3 p-3 py-3 my-5 rounded-xl bg-slate-200 shadow-xl bg-stone-200-300 border-solid border-4 border-white">
            <div className="">
                <span className="font-sans ">{item.card.info.name}</span>
                <span className=""> ₹ {item.card.info.price/100}</span>
            </div>
            <div>
                <p4 className="text-xs">{item.card.info.description}</p4>
            </div>
            <div className="flex justify-end object-cover h-[10rem] w-[12rem] overflow-hidden rounded-xl">
                <img src={CDN_URL+item.card.info.imageId} />
            </div>
            {console.log(item.card.info.imageId)}

        </div>
        
      ))}
    </div>
  );
};

export default ItemList;
