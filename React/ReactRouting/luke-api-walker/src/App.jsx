import {Routes, Route} from 'react-router-dom'
import Main from './views/Main'

import './App.css'
import ErrorMessage from './components/ErrorMessage'

function App() {


  return (
    <div className='container'>
      {/* THEATRE STAGE*/}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:selectedOption/:idValue" element={<Main />} />
        <Route path="/error" element={<ErrorMessage />} />
      </Routes>
    </div>
  )
}

export default App
