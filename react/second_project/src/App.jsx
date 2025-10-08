import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FirstComponent from './components/FirstComponent'

function App() {
  const styles = {
    backgroundColor: "aqua",
    color: "orchid",
    border: "5px dotted orange"
  }

  return (
    <>
      <h2 style={styles}>Random Text</h2>
      <p style={styles}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam doloremque voluptates, dolorem ratione assumenda perferendis officia autem quod? Tempora ratione reprehenderit veritatis voluptate accusantium, minus qui perferendis vel voluptatem? Nostrum?
        Ipsam aliquam modi neque nesciunt, impedit accusamus placeat culpa totam magnam blanditiis beatae, quibusdam facere enim nulla molestias esse optio architecto ut? Doloremque quidem odit sequi natus excepturi eos animi!
        Corporis repudiandae, corrupti numquam tenetur quasi dolore, quia explicabo incidunt qui voluptatum molestias eos illum repellendus suscipit a quas! Inventore alias quam repellat quidem nihil. Doloribus perspiciatis illum pariatur dignissimos?
        Esse dolore, aliquid possimus aliquam iste placeat corrupti similique impedit perferendis voluptates repellat. Nulla, aliquid! Ea nisi architecto aperiam atque expedita! Corporis recusandae animi, maxime dolore sint nam quo porro!</p>
      <FirstComponent count={20} data={"Anime"} />
    </>
  )
}

export default App
