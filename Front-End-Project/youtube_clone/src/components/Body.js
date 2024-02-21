import React from "react";
import {Outlet} from "react-router-dom";

import SideBar from "./SideBar";
import "../Allcss/Body.css";

const Body = () => {
  return (
    <div className="Body_cont">
      <div className="ChildSideBar">
        <SideBar />
      </div>
      <div className="ChildOtherSide">
        <Outlet/>
        
      </div>
    </div>
  );
};

export default Body;
