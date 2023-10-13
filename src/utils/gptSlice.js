import { createSlice} from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name : "gpt",
    initialState :{
        showGptSearch : false,
        movieResults : null,
        movieNames : null,
        openAiKey : null
    },
    reducers:{
        toggleGptSearchView : (state,action)=>{
            state.showGptSearch= !state.showGptSearch;
        },
        addGptMovieResults : (state,action)=>{
            const {movieNames, movieResults } = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        },
        addOpenAiKey : (state,action)=>{
            state.openAiKey = action.payload
        }
    }

});

export const {toggleGptSearchView,addGptMovieResults,addOpenAiKey} = gptSlice.actions; 
export default gptSlice.reducer;
