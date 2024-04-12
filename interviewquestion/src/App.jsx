import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value,setvalue] = useState(1)
  //const [multipliedvalue,setmultipliedvalue] = useState(1)
  let multipliedvalue = value*5

  const multiplybyfive = () =>{
    //setmultipliedvalue(value*5)
    setvalue(value+1)

  }

  return (
    <>
    <h1>Main Value: {value}</h1>
    <button
    onClick={multiplybyfive}    
    >Click Button to Multiply 5</button>
    <h1>Multiplied Value : {multipliedvalue}</h1>
    </>
  )
}

export default App
