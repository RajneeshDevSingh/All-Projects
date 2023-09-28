

const RestaurantCard = (props)=>
{
    const allRender = props.resData.info.cuisines.slice(0,3).join(", ");// to get maximum 3 cuisines
    
    return(
   
        <div className="h-98 w-64 rounded-xl p-2 m-4 shadow-xl bg-gray-300 border-solid border-4 border-white">
            <div className="h-[15rem]  flex flex-wrap">
            <img  className="max-h-[15rem] object-cover  w-full overflow-hidden rounded-xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+props.resData.info.cloudinaryImageId} alt="some img"/>
            </div>
            <div className="h-[7rem] ">
            <h3 className="font-bold py-1 text-lg">{props.resData.info.name}</h3>
            <h4 className="font-sans font-medium text-md">{props.resData.info.avgRating} star</h4>
            <h4 className="font-sans font-medium text-md">{allRender}</h4>
            <h4 className="font-sans font-medium text-md">{props.resData.info.deliveryTime}</h4>
            </div>
        </div>



    )
}

export default RestaurantCard;