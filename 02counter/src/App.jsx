import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0);

  function addValue(){
    if(counter < 20){
      counter++;
      setCounter(counter);
    }
  }

  function removeValue(){
    if(counter > 1){
      counter--;
      setCounter(counter);
    }
  }
  
  return (
    <>
      <h1>Hello, Parth</h1>
      <h2>Count:- {counter}</h2>
      <button onClick={addValue}>Increse</button>
      <br />
      <button onClick={removeValue}>Decrese</button>
    </>
  )
}

export default App
