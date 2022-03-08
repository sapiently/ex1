import React from "react";
import { Link } from "react-router-dom";
import './menubar.css'

function Menubar(){
    return(
        <div className="menubar-area">
            <Link to="/"><button className="menu-btn"><i class="fas fa-home"></i>홈</button></Link>
            <button className="menu-btn"><i class="fas fa-fire"></i>인기</button>
            <button className="menu-btn"><i class="fas fa-globe"></i>탐색</button>
            <button className="menu-btn"><i class="fas fa-youtube"></i>구독</button>
            <button className="menu-btn"><i class="fas fa-box"></i>홈</button>
        </div>
    )
}
export default Menubar