import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import VideoList from './components/videolist/videolist';
function App() {
  const [videoItems, setVideoItems] = useState([])
  useEffect(()=>{var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&key=AIzaSyCPPHTSUbqnkp55aY1nwWhNTZDwUbifbdQ", requestOptions)
    .then(response => response.json())
    .then(result => setVideoItems(result.items))
    .catch(error => console.log('error', error));},[])
  return (
    <div className="App">
      <VideoList videoItems={videoItems}/>
    </div>
  );
}

export default App;
