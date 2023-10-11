import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
  return (
    <div className='px-6'>
        <h1 className='text-lg md:text-3xl py-4 text-white'>{title}</h1>
        <div className='flex overflow-x-scroll scrollbar-width: none scrollbar-hide'>
            <div className='flex scrollbar-width: none scrollbar-hide'>
                {movies && movies.map(movie => <MovieCard key={movie.id} posterPath={movie.poster_path}/> )}
            </div>
        </div>
    </div>
  )
}

export default MovieList