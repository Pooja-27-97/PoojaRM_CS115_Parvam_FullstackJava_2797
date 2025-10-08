import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Counter } from './components/Counter'
import { CharLength } from './components/CharLength'

function App() {

  return (
    <>
      <h2>Use State Hook</h2>
      <Counter />
      <CharLength />
    </>
  )
}

export default App
