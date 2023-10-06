import { createSlice } from "@reduxjs/toolkit";



const movieSlice = createSlice({
    name: "movie",
    initialState:{
        nowPlayingMovies : null,
        popularMovies : null,
        trailerVideo : null,

    },
    reducers : {
        addNowPlayingMovies : (state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies : (state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo : (state,action)=>{
            state.nowPlayingMovies = action.payload;
        }
    }
})

export const {addNowPlayingMovies, addPopularMovies, addTrailerVideo} = movieSlice.actions;
export default movieSlice.reducer;