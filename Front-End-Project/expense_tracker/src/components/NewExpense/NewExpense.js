import React,{useState} from 'react'
import "./NewExpense.css"
import ExpenseForm from './ExpenseForm'
const NewExpense = (props) => {
    const[isEditig , setIsEditing]=useState(false)
    const startEditingHandler = ()=>
    {
        setIsEditing(true)
    }
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData)
        setIsEditing(false)
        
    };
    const stopEditingHandler = () => {
        setIsEditing(false);
      };
    
    return (
        <div className='new-expense'>
            {!isEditig && < button onClick={startEditingHandler}>Add new Expense </button>}
            {isEditig && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel = {stopEditingHandler} />}
        </div>
    );

}

export default NewExpense