import { MENU_API } from "./utils/Constants";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "./utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  // const [resInfo , setResInfo] = useState([]); this will handle by custom hook

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo == null) {
    return <h1>Loading ....................................</h1>;
  }
  const { name, id, costForTwoMessage, cloudinaryImageId } =
    resInfo.cards[0].card.card.info;
  // console.log(name,id,costForTwoMessage,cloudinaryImageId);

  const categories =
    resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (c) =>
        c.card.card["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const urlImg = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`;
  return (
    <div>
      <div className="p-4 mx-auto my-4 max-w-6xl flex flex-wrap items-center justify-center rounded-xl  shadow-xl bg-gray-300 border-solid border-4 border-white">
        <div className="flex flex-wrap justify-start flex-col gap-2">
          <h2 className="font-bold py-1 text-lg">Restaurant Name-: {name}</h2>
          <ul className="flex flex-wrap flex-col">
            Menue
            <li>Id-: {id}</li>
            <li>costForTwo -: {costForTwoMessage}</li>
          </ul>
        </div>
        <img
          className="ml-20 max-h-[10rem] w-26 object-cover overflow-hidden rounded-xl"
          src={urlImg}
          alt="some img"
        />

        {/* categories accordions ////////////////////////////////////////     key={category.card.card.itemCards.card.info.id}               */}
      </div>
      <div className="p-4 mx-auto my-4 max-w-6xl  items-center justify-center rounded-xl  shadow-xl bg-gray-300 border-solid border-4 border-white">
        {categories.map((category) => (<RestaurantCategory data={category.card.card} key={category.card.card.title}/>))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
