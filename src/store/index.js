//Import the configureStore and the createSlice from the toolkit Library
import { configureStore, createSlice } from "@reduxjs/toolkit";

//Create the base Slice of the Store
const backgroundSlice = createSlice({
    name:"BackgroundColorGenerator",
    initialState:{},
    reducers:{}
});

//Create the store management
const store = configureStore({
    reducer:backgroundSlice.reducer
});


//Export the functions
export default store;
export {backgroundSlice};