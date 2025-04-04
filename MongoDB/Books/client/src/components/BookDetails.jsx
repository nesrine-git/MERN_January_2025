import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import useUpdateTitle from '../hooks/useUpdateTitle'; 
import TitleContext from '../context/TitleContext';

const BookDetails = () => {
  const [book, setBook] = useState({});
  const { setTitle } = useContext(TitleContext);
  const { id } = useParams();
  const nav = useNavigate()

  useEffect(() => {
    axios.get(`http://localhost:3000/api/books/${id}`)
        .then((res) => {
            if (res.data.success) {
                console.log(res.data.data);
                setBook(res.data.data);    
            } else {
                console.error(res.data.message);
            }
        })
        .catch((err) => {
            console.log(err);
        });
}, [id])

  useUpdateTitle(book.title); // Update the title dynamically

  if (!book) return <p>Loading book details...</p>;

const deleteBook = () => { 
     axios.delete(`http://localhost:3000/api/books/${id}/delete`)
    .then((res) => {
        console.log(res.data);
            if (res.data.success) {
                alert(res.data.message);  // Show success message
                nav("/");  // Navigate to the main catalog page
                setTitle("Book Catalog");  // Update the page title
            } else {
                alert("Failed to delete the book.");
            }
    })
    .catch((err) => {
        console.error("Error deleting book:", err);
        alert("❌ There was an error deleting the book. ❌");
    });
}

if (!book) return <p>Loading...</p>;

return (
    <div>
        <div className='container d-flex flex-column gap-4 text-center shadow rounded rounded-2 p-5 mt-5 w-50'>
            <div>
                <h2>{book.title}</h2>
                <h5 className='text-black-50'>By {book.author}</h5>
            </div>
            <div>
                <h6 className='text-black-50'>Page count: {book.pages}</h6>
                <h6 className='text-success'> {book.isAvailable ? "Available for borrowing" : "Not Available"}</h6>
            </div>  
            <div>
                <button className='btn btn-danger text-white rounded-1' onClick={deleteBook}>Borrow</button>
            </div>  

        </div>
      </div>
  )
}

export default BookDetails