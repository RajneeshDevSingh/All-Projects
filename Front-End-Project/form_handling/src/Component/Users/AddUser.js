import React from "react"
import Card from "../UI/Card";
import classes from "./AddUser.module.css"
import Button from "../UI/Button";
const AddUser = () => {
    const addUserHandler = (event) => {
        event.preventDefault();
    }
    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">UserName</label>
                <input id="username" type="text"></input>
                <label htmlFor="age">Age</label>
                <input id="age" type="number"></input>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    )
}

export default AddUser;


https://github.com/academind/react-complete-guide-code/blob/08-practice-project/code/07-adding-the-errormodal-component/src/components/UI/Button.js