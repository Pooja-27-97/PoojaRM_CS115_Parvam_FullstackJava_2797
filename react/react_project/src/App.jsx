import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FirstComponent from './components/FirstComponent'
import SecondComponent from './components/SecondComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello World</h1>
      <FirstComponent count={10} data={"Some data"} />
      <SecondComponent />
    </>
  )
}

export default App
