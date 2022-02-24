import React from "react";
import Video from "../video/video";
function VideoList(props){
    return(
        <ul>
            {
                props.videoItems.map(videoItem=>(<Video videoItem={videoItem} key={videoItem.id}/>))
            
}
        </ul>
    )

}
export default VideoList