import { createSlice } from "@reduxjs/toolkit";



const movieSlice = createSlice({
    name: "movie",
    initialState:{
        nowPlayingMovies : null,
        popularMovies : null,
        topRatedMovies : null,
        upcomingMovies : null,
        trailerVideo : null,

    },
    reducers : {
        addNowPlayingMovies : (state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies : (state,action)=>{
            state.popularMovies = action.payload;
        },
        addTrailerVideo : (state,action)=>{
            state.trailerVideo = action.payload;
        },
        addTopRatedMovies :(state,action) =>{
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies : (state,action)=>{
            state.upcomingMovies = action.payload;
        }

    }
})

export const {addNowPlayingMovies, addPopularMovies, addTrailerVideo,addTopRatedMovies,addUpcomingMovies} = movieSlice.actions;
export default movieSlice.reducer;