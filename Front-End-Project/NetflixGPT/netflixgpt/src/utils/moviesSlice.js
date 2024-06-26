
import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState:
    {
        nowPlayingMovies:null,
        upCommingMovies:null,
        topRatedMovies:null,
        popularMovies:null,
        trailerVideo:null,
    },
    reducers:
    {
        addNowPlayingMovies: (state , action)=>
        {
            state.nowPlayingMovies = action.payload;
        },
        addTopRatedMovies: (state , action)=>
        {
            state.topRatedMovies = action.payload;
        },
        addUpCommingMovies: (state , action)=>
        {
            state.upCommingMovies = action.payload;
        },
        addPopularMovies: (state , action)=>
        {
            state.popularMovies = action.payload;
        },
        addTrailerVideo:(state, action)=>
        {
            state.trailerVideo = action.payload
        }
    }

})

export const {addNowPlayingMovies, addTrailerVideo, addPopularMovies, addUpCommingMovies, addTopRatedMovies} = moviesSlice.actions
export default moviesSlice.reducer;