// about to build
import React from "react";

const SearchRestaurat = () => {
  return (
    <div>
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
  );
};


export default SearchRestaurat; 
