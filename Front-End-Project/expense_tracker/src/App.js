
import './App.css';

import Expenses from './components/Expenses/Expenses';
function App() {
 const  expenses = [
    {
      id:1,
      title:"Milk",
      amount:95,
      date: new Date(2022, 10,20),
    },
    {
      id:2,
      title:"Water",
      amount:90,
      date:new Date(2022, 11,20),
    },
    {
      id:3,
      title:"IceCream",
      amount:905,
      date:new Date(2022, 11, 22),
    }
    ,{
      id:4,
      title:"Milk-Bar",
      amount:15,
      date:new Date(2022, 11, 22),
    },
    {
      id:5,
      title:"Car",
      amount:90500,
      date:new Date(2022, 10, 22),
    },
  ]
  return (
    <div>
      <Expenses items = {expenses}/>
    </div>
    
  );
}

export default App;
