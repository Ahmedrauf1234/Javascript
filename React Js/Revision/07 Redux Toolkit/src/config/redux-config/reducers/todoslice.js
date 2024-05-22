import { createSlice , nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'Todos',
    initialState:{
        todos:[{
            title:'Hello world',
            id : 1,
            id : nanoid()
        }]
    },
    reducers:{
        addTodo: (state , action)=>{
            state.todos.push({
                title:action.payload.title,
                id:nanoid()
            })
        },
        removeTodo:(state , action)=>{
            state.todos.splice(action.payload.index , 1)
        },
        updatedTodo:(state , action)=>{
            state.todos.splice(action.payload.index , 1 , {
                title: action.payload.title,
                id:nanoid()

            })
        }
    }
});

export const {addTodo , removeTodo , updatedTodo} = todoSlice.actions
export default todoSlice.reducer