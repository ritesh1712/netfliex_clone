import React, { useEffect, useState } from 'react'
import { fetchData,trailer } from './fetchData'

function Row({category,heading,nextNO,type,setVideoID,setShowVideo}) {
  const [list,setList] = useState([])
  const [loader,setLoader] = useState(true)
 
// Go8nTmfrQd8

useEffect( () => {
           const data = fetchData(category,nextNO,type)
           data.then((res)=>{
            setList(res)
            setLoader(false)
          }).catch((err)=>{
            console.log(err)
          })
        },[])

const youtube = (movieName) =>{
const data = trailer(movieName)
data.then((res)=>{
  setVideoID(res[0].id.videoId)
  setShowVideo(true)
}).catch((err)=>{
  console.log(err)
})
}

    return (
    <div className='ml-8 mt-8'>
      
<h1 className='text-white sm:text-2xl text-xl font-[400] mb-2'>{heading}</h1>
{loader &&<div class="animate-spin h-12 w-12  border-2 border-t-0  border-white rounded-full absolute"></div>}
<div className='flex items-center w-full overflow-x-auto no-scrollbar'>
    {list.map((item)=>(
    <img onClick={()=>youtube(item.title)} key={item.id} src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt="" className='sm:w-[200px] w-[120px] mr-2 mb-4 rounded cursor-pointer hover:scale-110 duration-300 transition-all ease-linear' />
    ))

    }
</div>
    </div>
  )
}

export default Row