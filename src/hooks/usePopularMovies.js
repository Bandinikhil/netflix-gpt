import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addPopularMovies } from '../utils/movieSlice';

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const popularVideos = useSelector((store)=>store.movie.popularMovies);
   const getPopularVideos = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-IN&page=1',API_OPTIONS);
    const json = await data.json();
    //console.log(json.results);
    dispatch(addPopularMovies(json.results));
    
   }

    useEffect(()=>{
    !popularVideos && getPopularVideos();
    },[])
 
}

export default usePopularMovies