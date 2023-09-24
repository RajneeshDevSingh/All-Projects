import React from "react";
import { useState, useEffect } from "react";
import { MENU_API } from "./Constants";
// I am creating this custom hook to only concern abount to fetch data with Restautant id ,
// so that RestauantMenu component has only one job to display data
const useRestaurantMenu = (resId) => {
    const [resInfo , setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
