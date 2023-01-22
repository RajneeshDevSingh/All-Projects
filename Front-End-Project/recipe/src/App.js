import React from "react"
import './App.scss';
import Header from "./component/Header"
import RecipeLists from "./component/RecipeLists"
import Tabs from "./component/Tabs"
function App() {
  return (
    <div className="main">
      <Header/>
      <Tabs/>
      <RecipeLists/>
    </div>
  );
}

export default App;
