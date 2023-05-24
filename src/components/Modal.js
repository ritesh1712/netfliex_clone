import React, { useState,useEffect } from 'react'
import Row from './Row'

function Modal({videoID,setShowVideo,setVideoID}) {
const [page,setPage] = useState(parseInt(Math.random()*5))
useEffect(() => {
 document.body.style.overflowY = 'hidden'

  return () => {
    document.body.style.overflowY = 'scroll'
    // setShowVideo(false)
  }
}, [])


  return (
    <div className='fixed top-0 left-0 bg-[rgba(60,60,60,0.8)] flex justify-center items-center h-full w-full'>
<div className='bg-black text-white sm:w-2/3 h-[98%] rounded-lg'>
    <div className='relative right-0 justify-end flex py-2 pr-2 '>
<i className="material-icons cursor-pointer hover:text-red-600" onClick={()=>setShowVideo(false)}>close</i>
    </div>
<iframe width="100%" height="350"
src={`https://www.youtube.com/embed/${videoID}?autoplay=1`}>
</iframe>
<Row category={'popular'} heading={'Recommend Movies'} nextNO={page===0?5:page} setShowVideo={setShowVideo} setVideoID={setVideoID}/>
</div>

    </div>
  )
}

export default Modal