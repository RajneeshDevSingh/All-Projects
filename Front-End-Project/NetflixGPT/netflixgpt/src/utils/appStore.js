import {configureStore} from "@reduxjs/toolkit"
import userSlice from "./userSlice";
import moviesSlice from "./moviesSlice";
import gptSearchSlice from "./gptSearchSlice";

const appStore = configureStore({
    reducer:{
        user:userSlice,
        movies:moviesSlice,
        gpt:gptSearchSlice
    },
})

export default appStore;