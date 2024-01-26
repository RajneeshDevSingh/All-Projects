import { useSelector } from "react-redux";
import "../Allcss/SideBar.css"




const SideBar = ()=>
{
    const isMenuOpen = useSelector((store)=> store.app.isMenuOpen)

    if(!isMenuOpen) return null;
    return(
        <div className="SideBar_cont">
            <h1 className="side_Main">Home</h1>
                <ul>
                    <li>Shorts</li>
                    <li>Videos</li>
                    <li>Live</li>
                </ul>

                <h1 className="side_Main">Subscriptions</h1>
                <ul>
                    <li>Shorts</li>
                    <li>Videos</li>
                    <li>Live</li>
                </ul>

                <h1 className="side_Main">More from YouTube</h1>
                <ul>
                    <li>Shorts</li>
                    <li>Videos</li>
                    <li>Live</li>
                </ul>
           
        </div>
    )
}

export default SideBar;