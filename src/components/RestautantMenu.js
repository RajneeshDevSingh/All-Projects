import {MENU_API} from "./utils/Constants"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "./utils/useRestaurantMenu";



const RestaurantMenu = () =>
{
    // const [resInfo , setResInfo] = useState([]); this will handle by custom hook
    const {resId} = useParams();


    const resInfo = useRestaurantMenu(resId);


        if(resInfo == null)
        {
            return(
                <h1>Loading ....................................</h1>
            )
        }
        const {name , id, costForTwoMessage , cloudinaryImageId} = resInfo.cards[0].card.card.info;
        // console.log(name,id,costForTwoMessage,cloudinaryImageId);

        const urlImg = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`
    return(
        <div className="RestaurantMenu">
            <h2>Name of the RestaurantCard -: {name}</h2>
            <ul >Menue
                <li>Id-: {id}</li>
                <li>costForTwoMessage-: {costForTwoMessage}</li>
                <img  className="dynImg" src={urlImg} alt="some img"/>
            </ul>
        </div>
    )

    
}


export default RestaurantMenu;