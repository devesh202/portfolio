import React from 'react'
import "./app.scss"
import Dock from './Dock'
import Nav from './components/Nav'
import MacWindow from './components/MacWindow'
import Github from './components/Github'

const App = () => {
  return (
    <main>
      <Nav/>
      
      <Dock/>
     
        <Github/>
    
    </main>
  )
}

export default App