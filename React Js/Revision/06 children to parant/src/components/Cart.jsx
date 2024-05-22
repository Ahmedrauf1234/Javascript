import React, { useRef, useState } from 'react'

const Cart = (props) => {
    const editedVal = useRef();
    const [showTodo , setShowTodo] = useState(true);
    const saveEditTodo = ()=>{
        // console.log(editedVal.current.value)
        props.editTodo(props.index,editedVal.current.value)
        setShowTodo(true)
    }
    
  return (
    <>
    <div style={{display:'flex', margin:"50px"}}>
    {showTodo === true ? <div>
        <div>
        <h3>{props.title}</h3>

        </div>
       
        <div>
        <button onClick={()=>props.deleteTodo(props.index)}>delete todo</button>
        <button onClick={()=> setShowTodo(false)}>Edit</button>
        </div>
    </div> : <div>
        <input type="text"  placeholder='enter edit value' ref={editedVal}/>
        <button onClick={saveEditTodo}>Save</button>
        </div>}

    </div>
    </>
  )
}

export default Cart