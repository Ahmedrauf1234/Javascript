import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, editTodo, removeTodo } from './config/redux-config/reducers/Todoslice'

const App = () => {
  const todoRef = useRef()
  //=================UseDispatch=================>>
  const dispatch = useDispatch()
  //=====================Use Selector=================>>
  const selector = useSelector(state => state.todos)
  const addTodoReduser = (event)=>{
    event.preventDefault()
    console.log(todoRef.current.value);
    dispatch(addTodo({
      title : todoRef.current.value
    }))
    todoRef.current.value = ''
    console.log(selector);
  }
//==========================delete todo=======================>>
  const deleteTodo = (index)=>{
    dispatch(removeTodo({
      index : index
    }))
    //===========================End=====================>>
    const editTodo = (index)=>{
      const updatedValue = prompt('Enter Updated value?');
      dispatch(editTodo({
        index : index,
        value : updatedValue

       
      }))
     
    }
  }
  return (
    <>
    <form onSubmit={addTodoReduser}>
      <input type="text" placeholder='Enter todo' ref={todoRef}/>
      <button type='submit'>Add todo</button>
    </form>

    <ul>
    {selector.map((items , index)=>{
      return <li key={index}>{items.title}
      <button onClick={()=>deleteTodo(index)}>delete</button>
      <button onClick={()=>editTodo(index)}>Edit Todo</button>
      </li>
    })}
    </ul>
    </>
  )
}

export default App