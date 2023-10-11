import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailerVideo } from '../utils/movieSlice';

const useMovieTralier = (movieId) => {
const dispatch = useDispatch();
const trailerVideos = useSelector(store=> store.movie.trailerVideo)

    const getMovieVideos = async ()=>{
        const data =await  fetch("https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",API_OPTIONS);
        const json = await data.json();
        console.log(json.results);
        const trailerArray = json.results.filter(videos =>videos.type === "Trailer")
        console.log(trailerArray);
        const trailer = trailerArray.length ? trailerArray[0] : json.results[0]
        dispatch(addTrailerVideo(trailer));
    }

    

    useEffect(()=>{
       !trailerVideos && getMovieVideos();
    },[])
  
}

export default useMovieTralier