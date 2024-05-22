import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, updatedTodo } from './config/redux-config/reducers/todoslice';


const App = () => {
  const todoref = useRef();
  //=======================Dispatch && selector============>>
  const dispatch = useDispatch();
  const selector = useSelector(state => state.todos);
  //===================End==================>>

  const addTodoReducer = (event)=>{
    event.preventDefault();
    console.log(todoref.current.value);
    dispatch(addTodo({
      title: todoref.current.value
    }))
    // console.log("data from redux",selector)
    todoref.current.value = ''
  }
  //===========================delete Todo ====================>>
  const deleteTodo = (index)=>{
    dispatch(removeTodo({
      index: index
    }))
  }
  //============================Edit todo===================>>
  const editTodo = (index)=>{
    const updaedVal = prompt('Enter Updated Value?')
    dispatch(updatedTodo({
      index : index,
      title : updaedVal
      
    }))
  }
  return (
    <div>
      <h1>Todo App</h1>
      <form onSubmit={addTodoReducer}>
        <input type="text" placeholder='Enter Todo' ref={todoref} />
        <button type='submit'>Add todo</button>
      </form>
      <div>
        {selector.map((items , index)=>{
          return <div key={index}>
            <h1>{items.title}
            <button onClick={()=>deleteTodo(index)}>Delete todo</button>
            <button onClick={()=>editTodo(index)}>Edit Todo</button></h1>
          </div>
        })}
      </div>
    </div>
  )
}

export default App