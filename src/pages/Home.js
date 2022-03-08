import React from "react";
import '../App.css'
import Menubar from "../components/menubar/Menubar";
import VideoList from "../components/videolist/VideoList";
import Videoview from "../components/videoview/Videoview";

const Home = ({videoItems,onVideoClick,selectView}) => {
    return(
        <div className="contents-wrap">
            <div className="sidebar">
                <Menubar/>                
            </div>
            <div class="content">
                {/* {selectView && <div className='view'><Videoview video={selectView}/></div>} */}
                <div className='list'>
                    <VideoList videoItems={videoItems}/*  key={videoItems.etag} */ onVideoClick={onVideoClick} display='collist'/>
                </div>
            </div>
        </div>
    )
}

export default Home