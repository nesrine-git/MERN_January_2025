import './App.css'
import BooksDisplay from './components/BooksDisplay'
import BookForm from './components/BookForm'
import BookDetails from './components/BookDetails'
import { Routes, Route } from 'react-router-dom'
import TitleContext from './context/TitleContext'
import { useState, useEffect } from 'react'
import Main from './views/Main'
import BookUpdate from './components/BookUpdate'

function App() {
    // Check if there's a saved title in localStorage, else use the default
    const savedTitle = localStorage.getItem('title') || 'Book Catalog';
    const [title, setTitle] = useState(savedTitle);
  
    // Whenever the title changes, save it to localStorage
    useEffect(() => {
      localStorage.setItem('title', title);
    }, [title]);
  

  return (
    <div className="container">
      <TitleContext.Provider value={{title, setTitle}}>
      <Main>
          <Routes>
            <Route path="/" element={<BooksDisplay />} />   
            <Route path="/create" element={<BookForm />} />
            <Route path="/books/:id/details" element={<BookDetails />} />
            <Route path="/books/:id/update" element={<BookUpdate />} /> 
          </Routes>
      </Main>
  
        </TitleContext.Provider>  
    </div>
  )
}

export default App
