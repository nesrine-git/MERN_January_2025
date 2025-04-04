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
    };
    
    // Function to validate form fields
    const validateForm = () => {
      let newErrors = {};
  
      if (!formData.title) newErrors.title = "❌ Title is required ❌";
      else if (formData.title.length < 2)
          newErrors.title = "Title must be at least 2 characters";
      else if (formData.title.length >255)
        newErrors.title = "Title must be less than 255 characters long"; 

      if (!formData.author.trim()) newErrors.author = "❌Author Name is required ❌";
      else if (formData.author.length < 5)
          newErrors.author = "Author name must be at least 5 characters long!";
      else if (formData.author.length > 255)
        newErrors.author = "Author name must be less than 255 characters long";

      if (!formData.pages || Number(formData.pages) < 1) {
        newErrors.pages = "❌ Page count must be at least 1";
      }

      setErrors(newErrors);
  
      return Object.keys(newErrors).length === 0; // ✅ Returns true if no errors
  };
    // Handle form submission
    const handleSubmit = (e) => {
      e.preventDefault()
      if (validateForm()) {

          axios.post('http://localhost:3000/api/books/create',formData)
          .then(res => {
              alert(res.data.message); 
              console.log(res);
              console.log(res.data);
              nav("/");
            })
      }
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
          <div className='d-flex flex-column justify-content-center align-items-center p-4 gap-3'>
            <div className='d-flex flex-column justify-content-start gap-1'>
                <label className="fw-bold">Title</label>
                <input type="Title" className="border border-2 border-secondary-light shadow-sm " name="title" value={formData.title} onChange={handleChange}/>
            </div>    
                {errors.title ? <div className="text-start" style={{ color: "red" }}>{errors.title}</div> : " " }
            
            <div className='d-flex flex-column justify-content-start gap-1'>
                <label className="fw-bold">Author Name</label>
                <input type="text" className="border border-2 border-secondary-light shadow-sm " name="author" value={formData.author}  onChange={handleChange}/>
            </div>
                {errors.author ? <div className="text-start" style={{ color: "red" }}>{errors.author}</div> : " " }
            
            <div className='d-flex flex-column justify-content-start gap-1'>
                <label className="fw-bold">Page Count</label>
                <input  className="border border-2 border-secondary-light shadow-sm w-50" type="number" min="0" step="1" name="pages" value={formData.pages}  onChange={handleChange}/>
            </div>
                {errors.pages? <div className="text-start" style={{ color: "red" }}>{errors.pages}</div> : " " }
            
            <div className='d-flex gap-2 p-1' style={{width:"200px"}}>
                <label className="fw-bold">Is it Available?</label>
                <input type="checkbox" className="form-check-input border border-2" name="isAvailable" checked={formData.isAvailable} onChange={handleChange}/>
            </div> 
            <div>
                <button className='btn btn-info custom-shadow text-white rounded-5 mt-3' style={{width:'145px'}}>Add Book!</button> 
            </div>
          </div> 
          
        </form>
        
    </div>
  )
}

export default BookForm