import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username:"Rahul",
    age:21
  }

  return (
    <>
     <h1 className='bg-green-400 text-black p-7'>Tailwind Test</h1>
     <br />
     <Card username="Harsh" btntext="click me"/>
      <Card username="Bhai"/> 
     
    </>
  )
}

export default App
