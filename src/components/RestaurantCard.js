

const RestaurantCard = (props)=>
{
    return(

        <div className="h-55 w-20 grid-cols-1 gap-5">
        <img  className="" 
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+props.resData.info.cloudinaryImageId} alt="some img"/>
        <div className="">
         <h3>{props.resData.info.name}</h3>
         <h4>{props.resData.info.cuisines.join(", ")}</h4>
         <h4>{props.resData.info.avgRating} star</h4>
         <h4>{props.resData.info.deliveryTime}</h4>
         </div>
     </div>


    )
}

export default RestaurantCard;