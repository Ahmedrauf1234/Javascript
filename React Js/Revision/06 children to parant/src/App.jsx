import React, { useRef, useState } from 'react'
import Cart from './components/Cart';

const App = () => {
  //=======================Ref , state ===================>>
  const todoVal = useRef();
  const [data , setData] = useState([]);
  //========================End====================>>
  const addTodo = (event)=>{
    event.preventDefault();
    console.log(todoVal.current.value)
    data.push(todoVal.current.value)
    setData([...data])
    todoVal.current.value = ""
  }
  //=======================delete todo===========>>
  const deleteTodo = (index)=>{
    console.log("deleted" , index);
    data.splice(index , 1)
    setData([...data]);
  }
  //==================Edit Todo===========>>
  const editTodo = (index  ,value )=>{
    console.log('todo edited' , value)
    data.splice(index , 1, value)
    setData([...data])
  }
  return (
    <>
    <h1>Todo App</h1>
    <form onSubmit={addTodo}>
      <input type="text" placeholder='Enter Todo' ref={todoVal} />
      <button type='submit'>Add Todo</button>
    </form>
    {data.length > 0 ? data.map((items , index)=>{
      return <div key={index}>
        <Cart  title={items} deleteTodo={deleteTodo} editTodo={editTodo} index={index}/>
      </div>
    }) : <h2>No data Found...</h2>}
    </>
  )
}

export default App