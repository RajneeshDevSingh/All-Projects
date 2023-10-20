import React from "react";
import RestaurantCard  from "./RestaurantCard";
import FakeUIShimmer from "./utils/FakeUIShimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";

import { useState, useEffect } from "react";
const Body = () => {
  const [ListofRestaurant, setListofRestaurant] = useState([]);
  const [SearchText, setSearchRestaurat] = useState("");
  const [filterRestaurant, setfilterRestaurant] = useState([]);

  // https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4921556&lng=77.09660869999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
  // https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.9844618&lng=77.7064137&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4921556&lng=77.09660869999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListofRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilterRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };



  const OnlineStatus = useOnlineStatus();

  if(OnlineStatus == false) return <h1>Looks like you are offline! Please check your internet connection</h1>

  if (ListofRestaurant.length == 0) {
    return <FakeUIShimmer />;
  }


  return (
    <div className="bg-neutral-500">
      <div className="flex justify-around bg-zinc-200">
        <div className="flex">
          <input
            className="m-5 p-10 placeholder:text-slate-400 block bg-white w-full border border-neutral-500 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none  focus:ring-black focus:ring-1 sm:text-sm" placeholder="Search for anything..."
            value={SearchText}
            onChange={(e) => {
              setSearchRestaurat(e.target.value);
            }}
          />

          <button
            className="my-5 px-2 rounded-md bg-gray-100 hover:bg-white "
            onClick={() => {
              console.log(SearchText);

              const filteredRestautantBasedonInput = ListofRestaurant.filter(
                (rest) =>
                  rest.info.name
                    .toLowerCase()
                    .includes(SearchText.toLowerCase())
              );

              setfilterRestaurant(filteredRestautantBasedonInput);
            }}
          >
            Search 
          </button>
        </div>

        <button
          className="my-5 px-2 rounded-md bg-gray-100 hover:bg-white  focus:ring-black focus:ring-1"
          onClick={() => {
            const filteredList = ListofRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            setListofRestaurant(filteredList);

            // console.log(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="flex flex-wrap justify-evenly">
        {filterRestaurant.map((restaurant) => (
          // <RestaurantCard key={restaurant.data.id} resData={restaurant}/>

          <Link to={"/restaurants/"+restaurant.info.id} key={restaurant.info.id}> <RestaurantCard  resData={restaurant} /> </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
