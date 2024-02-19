import { useState } from "react";

function App(){
  const [text , setText] = useState("")
  const [todo , setTodo] = useState([])


  function addTodo(event){
    event.preventDefault();
    console.log(text);
    todo.push(text)
    setTodo([...todo])
    console.log(todo);
    setText('')
  }
  const deleteTodo = (index)=>{
    console.log(index , 'deleted');
    todo.splice(index , 1)
    setTodo(...todo)
  }
  const editTodo = (index)=>{
    let Updated = prompt('Enter Value')
    todo.splice(index , 1 , Updated)
    // todo[index] = Updated
    setTodo([...todo])
  }
  
  
  return(
    <>
    <h1>Todo App</h1>
    <form onSubmit={addTodo}>
      <input type="text" name="" id="" onChange={(e)=>setText(e.target.value)} value={text} />
      <button type="submit">Add Todo</button>
    </form>

    <ul>
    
      {todo.map(function(item , index){
        return <li key={index}>{item}
        <button onClick={()=>deleteTodo(index)}>Delete</button>
        <button onClick={()=>editTodo(index)}>Edit</button>
        </li>
      })}
    </ul>
    
    
    </>
  )
}
export default App