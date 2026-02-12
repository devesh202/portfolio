import React from 'react'
import "./app.scss"
import Dock from './Dock'
import Nav from './components/Nav'
import MacWindow from './components/MacWindow'
import Github from './components/Github'
import Note from './components/Note'
import Resume from './components/Resume'

const App = () => {
  return (
    <main>
      <Nav/>
      
      <Dock/>
     
        <Github/>
        <Note/>
        <Resume/>
    
    </main>
  )
}

export default App