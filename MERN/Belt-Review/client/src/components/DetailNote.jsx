import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import CardItem from './CardItem';
import NoteService from '../services/NoteService';

const DetailNote = () => {
    const [note, setNote] = useState({});
    const { id } = useParams();
    const nav = useNavigate()

    useEffect(() => {
        NoteService.getOneNote(id)
            .then((res) => {
                if (res.success) {
                    console.log(res.data);
                    setNote(res.data);    
                } else {
                    console.error(res.message);
                }
            })
            .catch((err) => {
                console.log(err);
            });
}, [id])


    if (!note) return <p>Loading note details...</p>;

    // Delete Note
    const deleteNote = () => { 
        NoteService.deleteOneNote(id)
        .then((res) => {
            console.log(res);
            if (res.success) {
              nav("/");  // Navigate to the main catalog page
            } else {
                alert("Failed to delete the note.");
            }
        })
        .catch((err) => {
            console.error("Error deleting note:", err);
        });
    }
    return (
        <div className='container'>
            <CardItem key={note._id} 
                    element={note}  
                    deleteNote={deleteNote} 
                    showEdit = {false}
                    />
        </div>
    )
}

export default DetailNote