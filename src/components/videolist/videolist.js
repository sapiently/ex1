import React from "react";
import { Link } from "react-router-dom";
import Video from "../video/Video";
import './videolist.css';
function VideoList({videoItems,onVideoClick,display,search}){
    return(
        <ul className="videolist">
            {
                videoItems.map(videoItem=>(<Link to='/watch'><Video videoItem={videoItem} key={videoItem.etag} onVideoClick={onVideoClick} display={display} search={search}/></Link>))
            
}
        </ul>
    )

}
export default VideoList