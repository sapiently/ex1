import React from "react";
import './searchbar.css'
import { useRef } from "react";

import { Link, Navigate, useNavigate } from "react-router-dom";

function Searchbar({searchResult}){
    const inputClick = () => {searchfnc();}
    const inputEnter = (e) => {if(e.key === 'Enter'){searchfnc();}}

    const inputRef=useRef()

    const navigate=useNavigate()
    const searchfnc = () => {const value=inputRef.current.value; searchResult(value); navigate(`/search?search_query${value}`)}
    return(
        <div className="searchArea">
            <div className="logoarea">
                <button><i class="fa-solid fa-bars"></i></button>
                <h1><Link to="/"><img src="/images/logo.png" alt="youtube" className="logoimg" onClick={clickLogo}/></Link></h1>
            </div>
            <div className="searchInputarea">
                <input type="search" placeholder="검색" className="searchInput" onKeyPress={inputEnter} ref={inputRef}/>
                <button className="searchBtn" onClick={inputClick}>
                    <img src="/images/searchicon.png" alt="search"/>
                </button>
                <button className="micbtn"><i class="fa-solid fa-microphone"></i></button>
            </div>
            <div className="topMenuarea">
                <button className="gridmenuBtn">
                    <img src="/images/gridmenuicon.png" alt="topmenu"/>
                </button>
                <button className="btn-rightmenu"><i class="fa-solid fa-table-cells"></i></button>
                <button className="btn-rightmenu"><i class="fa-solid fa-ellipsis-vertical"></i></button>
                <button className="btn-rightmenu"><i class="fa-solid fa-user"></i></button>
            </div>
        </div>
    )
}
export default Searchbar