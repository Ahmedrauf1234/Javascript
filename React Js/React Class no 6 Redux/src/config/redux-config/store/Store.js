import { configureStore } from "@reduxjs/toolkit";
import todoreduser from '../reducers/Todoslice'

export const store = configureStore({
    reducer : todoreduser
});


//===============Use Slector (value mangane k liye use selector use hota hai)================>>
//===============Use Dispatch  (value behjne k liye use dispatch use hota hai)===============>>