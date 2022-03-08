import React from "react";
import { Link } from "react-router-dom";
import './video.css'
import * as common from '../../common'


function Video({videoItem,onVideoClick,display,search}){
    const container = 'container'
    const displayClass = display === 'rowlist' ? 'list-h' : 'list-v';
    return(
        <li className={`${container} ${displayClass} ${search? 'search' : ''}`}>
            <Link to='/watch'>
            <div className="video" onClick={()=>onVideoClick(videoItem)}>
                <img className="thumimg" src={videoItem.snippet.thumbnails.medium.url} alt="video thumnail"/>
            
            <div className="titledate">
                <div className="channelImg">
                <img className="channelImg-thumimg" src={videoItem.snippet.thumbnails.default.url} alt="video thumnail"/>
                </div>
                <div>
                <p className="title">{videoItem.snippet.title}</p>
                <p className="channelTitle">{videoItem.snippet.channelTitle}</p>
                <p className="publishDate">{common.publishDate(videoItem.snippet.publishedAt)}</p>
                {!search && <p className="viewNum">댓글{common.numberWithCommas(videoItem.statistics.commentCount)}개</p>}
                {search && <div className="description">{videoItem.snippet.description}</div>}
                </div>
            </div>
            </div>
            </Link>
        </li>
    )

}
export default Video