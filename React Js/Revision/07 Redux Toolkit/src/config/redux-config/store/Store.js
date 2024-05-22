import { configureStore } from "@reduxjs/toolkit";
import  todoReducer  from "../reducers/todoslice";

 export const store = configureStore({
    reducer: todoReducer
 });


 //=====================2 hooks==============>>
 //useSelector (value mangane k liye useSelector)
 //useDispatch (redux me value behjne k liye  )