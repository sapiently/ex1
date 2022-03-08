import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import VideoList from './components/videolist/VideoList';
import Searchbar from './components/searchbar/Searchbar';
import Videoview from './components/videoview/Videoview';

import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Home from './pages/Home';
import Search from './pages/Search';
import Watch from './pages/Watch';

const defaultVideos = Json.parse(sessionStorage.getItem('defaultVideos')) || null
const selectedWatch = Json.parse(sessionStorage.getItem('selectedWatch')) || null

const clickLogo = () => {setVideoItems(defaultVideos)}

function App({youtube}) {
  const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY
  const [videoItems, setVideoItems] = useState([])
  const [selectView, setSelectView] = useState(null)
  const selectVideo = (video) => {setSelectView(video); selectedWatch = video}

  const search = (searchValueText) => { setSelectView(null)
    /* var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }; */
    youtube
    .searchResult(searchValueText)
    .then(videos=>setVideoItems(videos))
    /* fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&regionCode=kr&type=video&maxResults=30&q=${searchValueText}&key=${API_KEY}`, requestOptions)
      .then(response => response.json())
      .then(result => result.items.map(item=>({...item, id:item.id.videoId})))
      .then(items => setVideoItems(items))
      .catch(error => console.log('error', error)); */
  }

  useEffect(()=>{/* const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  }; */
  youtube
  .mostPopular()
  .then(videos=>{setVideoItems(videos); defaultVideos = videos})
  /* fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&chart=mostPopular&regionCode=kr&maxResults=30&key=${API_KEY}`, requestOptions)
    .then(response => response.json())
    .then(result => setVideoItems(result.items))
    .catch(error => console.log('error', error)); */},[]);

  useEffect(()=> {
    sessionStorage.setItem('defaultVideos',JSON.stringify(defaultVideos))
    sessionStorage.setItem('selectedWatch',JSON.stringify(defaultVideos))
  },[videoItems,selectView])
  return (
    <div className="App">
      <BrowserRouter>
        <Searchbar searchResult={search} clickLogo={clickLogo}/>
         <Routes>
           <Route path='/' element={<Home videoItems={videoItems} onVideoClick={selectVideo} selectView={selectView}/>}/>
           <Route path='/search' element={<Search videoItems={videoItems} onVideoClick={selectVideo} selectView={selectView}/>}/>
           <Route path='/watch' element={<Watch videoItems={videoItems} onVideoClick={selectVideo} selectView={selectView}/>}/>
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
