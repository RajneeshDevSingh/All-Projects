import React from 'react'
import mealsImg from "../../assets/meals.jpg"
import classes from "./Header.module.css"
import HeaderCartButton from './HeaderCartButton'
const Header = (props) => {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>Food App</h1>
                <HeaderCartButton/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImg} alt="Food img ">
                </img>
            </div>
        </React.Fragment>
    )
}

export default Header