import { createSlice, nanoid } from "@reduxjs/toolkit";


export const todoSlice =  createSlice({
    name : 'Todos',
    initialState:{
        todos:[{
            title:'Hello world',
            id : 1
        }]
    },
    reducers:{
        addTodo:(state , action)=>{
            state.todos.push({
                title:action.payload.title,
                id: nanoid()
            })
        },
        removeTodo:(state , action)=>{
            state.todos.splice(action.payload.index , 1);
        },
        editTodo: (state , action)=>{
            // state.todos.splice(action.payload.index , 1 , {
            //     title:action.payload.value
                
            // })
            state.todos[action.payload.index].title = action.payload.value
        }

    }
})

export const{addTodo , removeTodo, editTodo } = todoSlice.actions
export default todoSlice.reducer 


