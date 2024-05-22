import React from 'react'
import { useState } from 'react';

const App = (event) => {
    //=================initialization=================>>
    const [text , setText] = useState("");
    const [ todo , setTodo] = useState([])

   //====================Addtodo===================>>
    const addTodo = (event)=>{
        event.preventDefault();
        console.log(text);
        todo.push(text)
        setTodo([...todo])
        setText("")
     }
     //============================Delete Todo=================>>
     const deleteTodo =(index)=>{
        console.log(index);
        todo.splice(index , 1)
        setText([...todo])
     }
     //===========================Edit Todo===================>>
     const editTodo = (index)=>{
        console.log(index);
        const User = prompt("Enter updated value");
        todo.splice(index , 1 , User)
        setTodo([...todo])
        console.log(todo);
     }
  return (
    <>
    <h1>Todo App {text}</h1>
    <form onSubmit={addTodo}>
        <input type="text" placeholder='Enter todo?' onChange={(e)=> setText(e.target.value)} value={text} />
        <button type='submit'>Add todo</button>
    </form>

    <ul>
       {todo.map((items , index)=>{
        return <div key={index}>
            <li>{items} <button onClick={()=>deleteTodo(index)}>Delete Todo</button> <button onClick={()=>editTodo(index)}>Edit Todo</button> </li>
        </div>
        })}
    </ul>
    </>
  )
}

export default App