import { Box, Button, TextField } from '@mui/material'

import React, { useRef, useState } from 'react'

const Home = () => {
  //=======================Decleartion========================>>
  const todo = useRef();
  const [data , setData] = useState([]);
  //============================End==========================>>
  const addTodo = (event)=>{
    event.preventDefault()
    // console.log(todo.current.value);
    setData(todo.current.value)
    console.log(data);
  }

  return (
    <Box className='d-flex  justify-content-center mt-5 ' >
    <form onSubmit={addTodo} className=' d-flex justify-content-center gap-2 '>
    <TextField id="outlined-basic" label="Enter Todo" variant="outlined" inputRef={todo}/>
    <Button type='submit' variant="contained">Contained</Button>
    </form>
    {/* <ul>
      {data.map((items , index)=>{
        return <li key={index}>{items}</li>
      })}
    </ul> */}
    </Box>
  )
}

export default Home