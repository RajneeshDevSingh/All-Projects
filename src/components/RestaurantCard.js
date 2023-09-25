

const RestaurantCard = (props)=>
{
    return(

        <div className="p-4 m-4 w-[250px] rounded-xl bg-orange-300 hover:bg-stone-500">
            <div className="w-auto">
        <img  className="object-cover rounded-xl" 
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+props.resData.info.cloudinaryImageId} alt="some img"/>

            </div>
        <div className="">
         <h3 className="font-bold py-2 text-lg">{props.resData.info.name}</h3>
         <h4 className="">{props.resData.info.cuisines.join(", ")}</h4>
         <h4 className="">{props.resData.info.avgRating} star</h4>
         <h4 className="">{props.resData.info.deliveryTime}</h4>
         </div>
     </div>


    )
}

export default RestaurantCard;