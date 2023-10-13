import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import lang from '../utils/languageConstants'
import openai from '../utils/openai'
import { API_OPTIONS } from '../utils/constants'
import { addGptMovieResults } from '../utils/gptSlice'
const GptSearchBar = () => {
    const langkey= useSelector(store => store.config.lang)
    
    const searchText = useRef(null)
    const dispatch = useDispatch();
    const searchMoviesTMDB = async (movie) =>{
      const data = await fetch(
        "https://api.themoviedb.org/3/search/movie?query=" +
          movie +
          "&include_adult=false&language=en-US&page=1",
        API_OPTIONS)
        const json = data.json();
          return json.results;
      
    }

const handleGptSearchClick = async () =>{
  //GPT SEARCH RESULTS
  try{
  const gptQuery = "Act as a movie recomendation system and suggest some movies for the query : " + searchText.current.value +
  ". only give me names of 5 movies, comma seperated like the example result given ahead. Example result given ahead. Example  Result : Gadar Sholey, Don, Golmaal, koi Mil Gaya";
  
  const gptResults = await openai.chat.completions.create({
    messages: [{ role: "user", content: gptQuery }],
    model: "gpt-3.5-turbo",
  });

  if (!gptResults.choices) {
    alert('nO SEARCH RESULTS FOUND');
    return;
  }

  console.log(gptResults);

  console.log(gptResults.choices?.[0]?.message?.content);
  const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

  const promiseArray = gptMovies.map(movie => searchMoviesTMDB(movie));

  const tmdbResults  = await Promise.all(promiseArray);
 dispatch(addGptMovieResults({movieNames : gptMovies , movieResults : tmdbResults}))
}catch(err){
  alert('No results found, key is not valid')
  console.error("Error in handling GPT Search Click: ", err);
}

}

  return (
    <>
    <div className='pt-[35%] md:pt-[10%] flex flex-col justify-center mx-auto '>
        <form className='w-full md:w-1/2 bg-black grid grid-cols-12 z-50 rounded-lg mx-auto'
        onSubmit={(e)=> e.preventDefault()}>
            <input type='text'
            placeholder={lang[langkey].gptSearchPlaceholder}
            ref = {searchText}
           //placeholder='WHAT Movie do you want to watch'
            className='p-4 m-4 col-span-9 rounded-lg'
             />
            <button className='col-span-3 m-4 py-2 px-4 bg-red-600 text-white rounded-lg  '
            onClick={handleGptSearchClick}
            >{lang[langkey].search}</button>

        </form>
        <input type="text" className='w-full md:w-1/2 mx-auto p-3 mt-2 rounded-lg' onChange={(e)=> setOpenAi(e.target.value)} placeholder='Enter OpenAI Key  ' />
    </div>
    </>
  )
}

export default GptSearchBar