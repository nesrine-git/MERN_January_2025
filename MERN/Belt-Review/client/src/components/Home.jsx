import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import CardItem from './CardItem'
import NoteService from '../services/NoteService'


const Home = () => {
  const [allNotes, setAllNotes] = useState([])
  const nav = useNavigate()
  
  useEffect(() => {
    NoteService.getAllNote()
      .then((res) => {
        if (res.success) {
          setAllNotes(res.data);
      } else {
          console.error(res.message);
      }
      })
      .catch((err) => 
        console.error("Error fetching notes:", err));
  }, []);

  // Handle Navigate to edit page
  const handleNavigate = (id) => {
      nav(`/notes/${id}/edit`)
  }
  // Delete Note
  const deleteNote = (id) => { 
    NoteService.deleteOneNote(id)
    .then((res) => {
        console.log(res);
            if (res.success) {
              const updateList = allNotes.filter((oneNote) => oneNote._id != id)
              setAllNotes(updateList)
            } else {
                alert("Failed to delete the note.");
            }
    })
    .catch((err) => {
        console.error("Error deleting note:", err);
    });
}

  return (
    <div className='container d-flex flex-column gap-3 p-4'>
      {allNotes.map((note) => (
          <CardItem key={note._id} 
          element={note} 
          handleNavigate={handleNavigate} 
          deleteNote={deleteNote} 
          showEdit = {true}
          />
      ))}  
    </div>
  )
}

export default Home