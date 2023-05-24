import React,{useState,useEffect} from 'react'
import { fetchData,trailer } from './fetchData'
function Banner({setShowVideo,setVideoID}) {
  const [list,setList] = useState([])
  const [loading,setLoading] = useState(true)
  const  [index,setIndex] = useState(parseInt(Math.random()*20))
  
  useEffect( () => {
    const data = fetchData('popular',3)
    data.then((res)=>{
            setList(res)
            setLoading(false)
         })
        },[])

        const youtube = (movieName) =>{
          const data = trailer(movieName)
          data.then((res)=>{
            setVideoID(res[0].id.videoId)
            setShowVideo(true)
          })
          }

        return (
          <>
   {
!loading &&
     <div style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${list[index].backdrop_path})`}} className='w-full h-[98vh] bg-cover bg-no-repeat bg-center mb-5'>
     <div className='max-w-[1242px] w-full m-auto flex flex-col justify-center space-y-4 pt-32'>
<h2 className='text-white font-semibold text-4xl sm:text-6xl sm:w-[40%] ml-2'>{list[index].title}</h2>
<p className='text-gray-200 text-xl sm:w-[40%] ml-2'>{list[index].overview.slice(0,150)}</p>
<div className='flex'>
<button onClick={()=>youtube(list[index].title)}   className='bg-white m-2 p-1 rounded font-semibold text-xl flex justify-center items-center w-24'> 
<i className="material-icons pr-1">play_arrow</i>
Play</button>
{/* <button className='bg-gray-500 text-white m-2 p-1 rounded font-semibold text-xl flex justify-center items-center w-36'>
<i className="material-icons pr-1">info_outline</i>
  More Info</button> */}
</div>
     </div>
    </div>
  }
          </>
  )
}

export default Banner