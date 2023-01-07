import React,{useState} from "react"
import Card from "../UI/Card";
import classes from "./AddUser.module.css"
import Button from "../UI/Button";
const AddUser = (props) => {
    const [enteredUsername , setEnteredUsername] = useState("");
    const [enteredUserage , setEnteredUserage] = useState("");
     // [current state(snap sort) , function that can change the state of component]
    const usernameChangeHandler = (event) =>
    {
        setEnteredUsername(event.target.value);
    }

    const useragechangeHandler = (event) =>
    {
        setEnteredUserage(event.target.value);
    }
    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredUserage.trim().length === 0)
        {
            return ;
        }
        if(+enteredUserage < 1) // + to convert string to number
        {
            return ;
        }

        props.onAddUser(enteredUsername , enteredUserage);
        console.log(enteredUserage , enteredUsername)
        setEnteredUserage('')
        setEnteredUsername('')
    }
    
    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">UserName</label>
                <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}></input>
                <label htmlFor="age">Age</label>
                <input id="age" type="number" value={enteredUserage} onChange={useragechangeHandler}></input>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    )
}

export default AddUser;


//https://github.com/academind/react-complete-guide-code/blob/08-practice-project/code/07-adding-the-errormodal-component/src/components/UI/Button.js