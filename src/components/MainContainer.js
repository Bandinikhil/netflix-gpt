import React from 'react'
import { useSelector } from 'react-redux'
import VideoTiltle from './VideoTiltle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const movies = useSelector(store=> store.movie.nowPlayingMovies);

    if(!movies) return;
    const mainMovie = movies[Math.floor(Math.random()*20)];
    
    const {id,overview,title} = mainMovie;
  return (
    <div className='pt-[30%] bg-black md:pt-0 '>
        <VideoTiltle title={title} overview={overview}/>
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer