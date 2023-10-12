import React from 'react'

const VideoTiltle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] -mt-20 px-6 md:px-16 absolute text-white bg-gradient-to-r from-black'>
     <h1 className='text-2xl md:text-6xl font-bold '>{title}</h1>
     <p className='hidden md:inline-block py-6 text-lg w-1/4 line-clamp-5'>{overview}</p>
     <div className='my-2 md:m-0'>
        <button className='bg-white text-black p-4 px-12  md:px-12 text-xl rounded-md hover:bg-opacity-80 '> ▶️ Play </button>
        <button className='hiden md:inline-block mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-md '>More Info</button>
     </div>
    
    </div>
  )
}

export default VideoTiltle        