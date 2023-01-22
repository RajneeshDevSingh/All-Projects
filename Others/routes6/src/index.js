import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';

import {BrowserRouter , Routes , Route} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>

    <Route path='/' element={<Home/>}  />
  </Routes>
  </BrowserRouter>
);


function Home()
{
  return(
    <div>
      <h1>
      Hello from Home Page    
      </h1>
    </div>
  )
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

