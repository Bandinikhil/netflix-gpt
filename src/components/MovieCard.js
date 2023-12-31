import React from 'react'
import { IMG_CDN_URL } from '../utils/constants';

const MovieCard = ({movieId,posterPath}) => {

  if(!posterPath) return null;
  return (
    <>
     <div className="w-28 sm:w-32 md:w-48 pr-4">
      <img src={IMG_CDN_URL + posterPath} alt="Movie Cars" />
    </div>
    
     </>
  )
}

export default MovieCard