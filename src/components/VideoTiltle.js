import React from 'react'

const VideoTiltle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black'>
     <h1 className='text-lg md:text-5xl font-bold '>{title}</h1>
     <p className='hidden sm:hidden  sm:w-1/4 py-6 text-lg w-1/4 line-clamp-3 sm:line-clamp-3 md:line-clamp-3'>{overview}</p>
     <div className='my-4 md:m-0'>
        <button className='bg-white text-black p-1 py-1 md:py-2 px-3 md:px-8 text-xl rounded-md hover:bg-opacity-80 '> ▶️ Play </button>
        <button className='hidden md:inline-block mx-2 bg-gray-500 text-white p-4 md:py-2 md:px-8 text-xl bg-opacity-50 rounded-md '>More Info</button>
     </div>
    
    </div>
  )
}

export default VideoTiltle        