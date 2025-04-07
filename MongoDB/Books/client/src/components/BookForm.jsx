import React, { useState,  useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import useUpdateTitle from '../hooks/useUpdateTitle';


const BookForm = () => {
  const [formData, setFormData] = useState({
      title:"",
      author:"",
      pages:1, 
      isAvailable: false
    })
  
    // State to store validation errors
    const [errors, setErrors] = useState({});

    const nav = useNavigate();

    
    useUpdateTitle('Add a Book'); // Set the title for this page

    // Handle changes in the input fields
    const handleChange = (e) => {
  
      const { name, type, value, checked } = e.target;
      setFormData((prevState) => ({
        ...prevState,
        [name]: type === "checkbox" ? checked : value
      }));
      setErrors((prev) => ({ ...prev, [name]: null }));  //old errors are cleared as the user types 
    };
    

    // Handle form submission
    const handleSubmit = (e) => {
      e.preventDefault()

          axios.post('http://localhost:3000/api/books/create',formData)
          .then(res => {
              console.log(res);
              console.log(res.data);
              nav("/");
            })
            .catch((err) => {
              setErrors(err.response.data.errors)
            })
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <div className='d-flex flex-column justify-content-center align-items-center'>
          <div className='d-flex flex-column align-items-start p-4 gap-3'>
            {/* Title Section*/}
            <div className='d-flex flex-column justify-content-start gap-1'>
                <label className="fw-bold">Title</label>
                <input type="Title" className="border border-2 border-secondary-light shadow-sm " name="title" value={formData.title} onChange={handleChange}/>
            </div>    
            {errors.title ? <div style={{ color: "red" }}>{errors.title.message}</div> : " " }

            {/* Author Name Section*/}
            <div className='d-flex flex-column justify-content-start gap-1'>
                <label className="fw-bold">Author Name</label>
                <input type="text" className="border border-2 border-secondary-light shadow-sm " name="author" value={formData.author}  onChange={handleChange}/>
            </div>
            {errors.author ? <div style={{ color: "red" }}>{errors.author.message}</div> : " " }
            
            {/* Page Count Section*/}
            <div className='d-flex flex-column justify-content-start gap-1'>
                <label className="fw-bold">Page Count</label>
                <input  className="border border-2 border-secondary-light shadow-sm w-50" type="number" min="0" step="1" name="pages" value={formData.pages}  onChange={handleChange}/>
            </div>
            {errors.pages? <div style={{ color: "red" }}>{errors.pages.message}</div> : " " }

            {/* Is Available Section*/}
            <div className='d-flex gap-2'>
                <label className="fw-bold">Is it Available?</label>
                <input type="checkbox" className="form-check-input border border-2" name="isAvailable" checked={formData.isAvailable} onChange={handleChange}/>
            </div> 

            {/* Button Section*/}
            <div>
                <button className='btn btn-info custom-shadow text-white rounded-5 mt-3' style={{width:'145px'}}>Add Book!</button> 
            </div>
          </div> 
          </div>
        </form>
        
    </div>
  )
}

export default BookForm