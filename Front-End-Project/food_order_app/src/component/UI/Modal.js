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
const ModalOverlay= (props) =>
{
    return(
        <div className={classes.model}>
            <div className={classes.content}>
                {props.children}
            </div>

        </div>
    )
}

const portalElement = document.getElementById('overlays');

// change the props
const Modal = (props) => {
  return (
    <Fragment>
        {ReactDOM.createPortal(<Backdrop/> , portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay> , portalElement)}
    </Fragment>
  )
}

export default Modal