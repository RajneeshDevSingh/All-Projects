

const RestaurantCard = (props)=>
{
    return(

        <div className="res-card">
        <img  src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+props.resData.info.cloudinaryImageId} alt="some img"/>
        <div className="other-data">
         <h3>{props.resData.info.name}</h3>
         <h4>{props.resData.info.cuisines.join(", ")}</h4>
         <h4>{props.resData.info.avgRating} star</h4>
         <h4>{props.resData.info.deliveryTime}</h4>
         </div>
     </div>



        // <div className="res-card">
        //    <img  src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+props.resData.data.cloudinaryImageId} alt="some img"/>
        //    <div className="other-data">
        //     <h3>{props.resData.data.name}</h3>
        //     <h4>{props.resData.data.cuisines.join(", ")}</h4>
        //     <h4>{props.resData.data.avgRating} star</h4>
        //     <h4>{props.resData.data.deliveryTime}</h4>
        //     </div>
        // </div>



    )
}

export default RestaurantCard;