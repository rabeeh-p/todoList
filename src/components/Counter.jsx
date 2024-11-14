import React, { useState } from 'react'

const Counter = () => {
    let [counter,setCounter]= useState(0)

    let increasingButton= ()=>{
        setCounter(counter + 1)
    }
  return (
    <div>
        <h1>counter     {counter}</h1>

        <button onClick={increasingButton}>Increasing</button>
        <button onClick={()=>setCounter(counter-1)}>Decreasing</button>
      
    </div>
  )
}

export default Counter
