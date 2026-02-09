import React from 'react'
import "./app.scss"
import Dock from './Dock'
import Nav from './components/Nav'
import MacWindow from './components/MacWindow'

const App = () => {
  return (
    <main>
      <Nav/>
      
      <Dock/>
      <MacWindow> 
        <p>Terminal content goes here...</p>
      </MacWindow>
    </main>
  )
}

export default App