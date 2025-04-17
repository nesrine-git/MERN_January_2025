import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Update from './components/Update'
import Main from './views/Main'
import DetailNote from './components/DetailNote'
import Create from './components/Create'
import Home from './components/Home'

function App() {
  
  return (
    <div className="container">
      <Main>
        <Routes>
          <Route path="/" element={<Home/>}/>   
          <Route path="/notes" element={<Create />} />
          <Route path="/notes/:id" element={<DetailNote />} />
          <Route path="/notes/:id/edit" element={<Update />} /> 
        </Routes>
      </Main>
    </div>
  )
}

export default App
