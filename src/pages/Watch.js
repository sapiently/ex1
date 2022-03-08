import React from "react";
import '../App.css'

import VideoList from "../components/videolist/VideoList";
import Videoview from "../components/videoview/Videoview";

const Watch = ({videoItems,onVideoClick,selectView,selectedWatch}) => {
    return(
            <div class="content">
                {/* {selectView &&  */}<div className='view'><Videoview video={selectedWatch}/></div>{/* } */}
                <div className='list'>
                    <VideoList videoItems={videoItems}/*  key={videoItems.etag} */ onVideoClick={onVideoClick} display='rowlist'/>
                </div>
            </div>
        
    )
}
export default Watch