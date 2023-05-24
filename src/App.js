import Header from "./components/Header";
import Row from "./components/Row";
import Banner from "./components/Banner";
import React, { useState} from 'react'
import Modal from "./components/Modal";


function App() {
  const [videoID,setVideoID] = useState()
  const [showVideo,setShowVideo] = useState(false)


  return (
<div className="bg-black pb-10 h-full">
  <Header/>
  <Banner setShowVideo={setShowVideo} setVideoID={setVideoID}/>
  <Row category={'popular'} heading={'Trending Now'} nextNO={3} setShowVideo={setShowVideo} setVideoID={setVideoID}/>
  <Row category={'upcoming'} heading={'Upcoming'} nextNO={2} setShowVideo={setShowVideo} setVideoID={setVideoID}/>
  <Row category={'popular'} heading={'Popular'} setShowVideo={setShowVideo} setVideoID={setVideoID}/>
  <Row category={'top_rated'} heading={'Top Rated'} setShowVideo={setShowVideo} setVideoID={setVideoID}/>
  <Row category={'top_rated'} heading={'Tv Shows'} type={'tv'} setShowVideo={setShowVideo} setVideoID={setVideoID}/>
  {
  showVideo && <Modal videoID={videoID} setShowVideo={setShowVideo} setVideoID={setVideoID} />
}

</div>
  );
}

export default App;
