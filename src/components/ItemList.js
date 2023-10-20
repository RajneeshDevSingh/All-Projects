import React from "react";
import { CDN_URL } from "./utils/Constants";



const ItemList = ({ items }) => {
  return (
    <div >
      {items.map((item) => (
        
        <div key={item.card.info.id} className="m-3 p-3 mx-auto my-5 flex rounded-xl w-auto bg-slate-200 shadow-xl bg-stone-200-300 border-solid border-4 border-white">
          <div className="flex flex-col w-8/12">
            <div className="">
                <span className="font-sans ">{item.card.info.name}</span>
                {/* <span className=""> ₹ {item.card.info.costForTwo}</span> */}
                <span className=""> ₹ {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrce/100}</span>
            </div>
            <div>
                <p4 className="text-xs">{item.card.info.description}</p4>
            </div>
          </div>
            <div className="flex  h-auto object-cover overflow-hidden rounded-xl w-[20%]">
                <img  className="h-auto w-max object-cover " src={CDN_URL+item.card.info.imageId} alt="img"/>
            </div>
           <div className="w-22 mx-5 h-12 mt-10 flex border-solid border-2  rounded-xl">
            <button className="w-14 border-solid border-2 bg-black rounded-xl ">➖</button>
            <button className="w-14 border-solid border-2 bg-black rounded-xl "> ➕</button>
           </div>

        </div>
        
      ))}
    </div>
  );
};

export default ItemList;
