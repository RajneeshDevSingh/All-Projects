import React, { useState } from "react"
import './App.scss';
import Header from "./component/Header"
import RecipeLists from "./component/RecipeLists"
import Tabs from "./component/Tabs"
function App() {
  const[loader , setLoader] = useState(true);
  return (
    <div className="main">
      <Header/>
      <Tabs  setLoader={setLoader}/>
      <RecipeLists setLoader={setLoader}/>
      {loader && <div className="loader">
        <div className="spinner"></div>
        </div>}
    </div>
  );
}

export default App;


//d7e9890f978149c6fd3feabbcc8e49d5