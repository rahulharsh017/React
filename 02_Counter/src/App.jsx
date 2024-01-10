import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let[counter,setCounter]=useState(0)
  let[isdisabled1,setdisable1]=useState(false)
  let[isdisabled2,setdisable2]=useState(false)


  const addValue = () =>{
    setCounter(counter+1)
    console.log(counter);
    if(counter === 19)
    setdisable1(true)
    setdisable2(false)
  }

  const removeValue = () =>{
    setCounter(counter-1)
    console.log(counter);
    if(counter === 1)
    setdisable2(true)
  setdisable1(false)
  }



  return (
    <>
      <h1>Rahul aur React</h1>
      <h2>Counter is : {counter}</h2>

      <button  onClick={addValue} disabled={isdisabled1}>Add Value</button>
      <br />
      <button onClick={removeValue} disabled = {isdisabled2}>Remove Value</button>
    </>
  )
}

export default App
