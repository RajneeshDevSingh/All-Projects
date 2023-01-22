import React from 'react';
import './App.css';
import Header from './component/Layout/Header';
import Meals from './component/Meals/Meals';
import Cart from './component/Cart/Cart';
function App() {
  return (
    <React.Fragment>
      <Cart/>
      <Header/>
      <main>
          <Meals/>
      </main>
      
    </React.Fragment>
  );
}

export default App;
