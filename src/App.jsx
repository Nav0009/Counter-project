import { useState } from 'react'

import './App.css'


function App() {
  
  let [counter , setCounter] = useState(0)


  // let counter = 15 

  const addValue = () => {
    console.log("value added", counter);
    counter = counter + 1 ;
    setCounter(counter)
    
  }

  const removeValue = () => {
    console.log("value removed", counter);
    counter = counter - 1 ;
    setCounter(counter)
    
  }

  return (
    <>
      <h1>COUNTER MINI PROJECT</h1>
      <h2>Counter value: {counter} </h2>

      <button
      onClick={addValue}
      >Add Value</button>
      <br />
      <br />
      <button
      onClick={removeValue}
      >Remove Value</button>

    </>
  )
}

export default App
