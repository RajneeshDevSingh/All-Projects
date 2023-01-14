import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';
import React from 'react'


const Backdrop = (props)=>
{
    return(
        <div className={classes.backdrop}>

        </div>
    )
}
const ModalOverlay= () =>
{
    return(
        <div className={classes.model}>
            <div className={classes.content}>
                {props.children}
            </div>

        </div>
    )
}
const Model = () => {
  return (
    <Fragment>
        <Backdrop/>
        <ModalOverlay/>
    </Fragment>
  )
}

export default Model