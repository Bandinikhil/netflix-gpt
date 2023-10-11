import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUpcomingMovies } from '../utils/movieSlice';
import { API_OPTIONS } from '../utils/constants';

const useUpcomingMovies = () => {
    const upcomingmovies = useSelector(store=> store.movie.upcomingMovies);
const dispatch = useDispatch();

const getTopRatedMovies = async() =>{
    const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-IN&page=1", API_OPTIONS);
    const json = await data.json();
    console.log(json.results);
    dispatch((addUpcomingMovies(json.results)));

}


useEffect(()=>{
    !upcomingmovies && getTopRatedMovies()
    },[])
        return(
            <>
            </>
        )
    }

export default useUpcomingMovies




