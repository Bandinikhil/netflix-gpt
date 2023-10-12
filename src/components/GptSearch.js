import React from 'react'
import GptSearchBar from './GptSearchBar'
import { BG_URL } from '../utils/constants'
import GptMovieSuggestion from './GptMovieSuggestion'

const GptSearch = () => {
  return (
    <>
    <div className="absolute no-scrollbar">
           <img className='h-screen w-screen -z-50 overflow-x-clip object-cover no-scrollbar' src={BG_URL} alt="logo" />
    </div>
     <div>
        <GptSearchBar/>
        <GptMovieSuggestion/>
    </div>
    </>
  )
}

export default GptSearch