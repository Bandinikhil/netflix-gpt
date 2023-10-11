import React from 'react'
import { useSelector } from 'react-redux'
import useMovieTralier from '../hooks/useMovieTralier';

const VideoBackground = ({movieId}) => {
    const tralierVideo = useSelector(store=> store.movie?.trailerVideo);

    useMovieTralier(movieId);

  return (
    <div className='w-screen m-0'>
        <iframe
        className="w-screen aspect-video z-50 m-0"
        src={
          "https://www.youtube.com/embed/"+
          tralierVideo?.key+"?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  )
}

export default VideoBackground