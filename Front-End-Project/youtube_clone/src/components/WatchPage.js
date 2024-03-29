import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closeMenu } from '../Utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentContainer from './CommentContainer';

import "../Allcss/watchPage.css"
import LiveChat from './LiveChat';
const WatchPage = ()=>
{
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeMenu())
    },[]);
 return (
    <div className='watchPage'>
    <div className="watchVideo">
        <iframe width="1000" 
        height="500" 
        src={"https://www.youtube.com/embed/" + searchParams.get("v")} 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen>
        </iframe>
    </div>

    <div className='LiveChat'><LiveChat/></div>
    <div className='commentsSection'>
        <CommentContainer/>
    </div>
    </div>
 )
}

export default WatchPage;