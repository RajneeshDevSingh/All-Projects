
import './App.css';
import ExpenseItems from './components/ExpenseItems';
function App() {
 const  Expenses = [
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
    }
  ]
  return (
    <div className="App">
      <ExpenseItems title = {Expenses[0].title} amount={Expenses[0].amount} date = {Expenses[0].date}/>
      <ExpenseItems title = {Expenses[1].title} amount={Expenses[1].amount} date = {Expenses[1].date}/>
      <ExpenseItems title = {Expenses[2].title} amount={Expenses[2].amount} date = {Expenses[2].date}/>
    </div>
  );
}

export default App;
