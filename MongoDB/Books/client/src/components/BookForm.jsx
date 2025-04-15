import React, { useState,  useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import useUpdateTitle from '../hooks/useUpdateTitle';


const BookForm = () => {
  const [formData, setFormData] = useState({
    title:"",
    author:"",
    pages:"",
    isAvailable: false
    })
  
    // Server errors
    const [errors, setErrors] = useState({});
    // Client errors
    const [formErrors, setFormErrors] = useState({
      title: "Please provide a title for your book!",
      author: "Author name is required!",
      pages: "Number of pages is required!",
    })
    // hide client-errors on Load
    const [enteredForm, setEnteredForm] = useState(false)

    const nav = useNavigate();

    useUpdateTitle('Add a Book'); // Set the title for this page

    const validateForm = () => {
      return Object.values(formErrors).every(value => value === '');
    }

    // Handle changes in the input fields
    const handleChange = (e) => {
      const { name, type, value, checked } = e.target;
      setFormData((prevState) => ({
        ...prevState,
        [name]: type === "checkbox" ? checked : value
      }));

      // Initialize error message variable
      let errorMsg = '';
      const val = value.trim();

      // Validate the specific field based on its name
      if (name === 'title') {
        if (val === '') {
          errorMsg = 'Please provide a title for your book!';
        } else if (val.length < 2) {
          errorMsg = 'Title must be at least 2 characters long!';
        } else if (val.length > 255) {
          errorMsg = 'Title must be less than 255 characters long';
        }
      }

      if (name === 'author') {
        if (val === '') {
          errorMsg = 'Author name is required!';
        } else if (val.length < 5) {
          errorMsg = 'Author name must be at least 5 characters long!';
        } else if (val.length > 255) {
          errorMsg = 'Author name must be less than 255 characters long';
        }
      }

      if (name === 'pages') {
        if (val === '') {
          errorMsg = 'Number of pages is required!';
        } else if (Number(val) < 1) {
          errorMsg = 'A book must have at least one page!';
        }
      }
      // Update the formErrors state with the error for the current field
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        [name]: errorMsg
      }));

      //old server-errors are cleared as the user types
      setErrors((prev) => ({ ...prev, [name]: null }));  
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
              //console.log(err.response.data.validations)
              setErrors(err.response.data)
            })
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <div className='d-flex flex-column justify-content-center align-items-center'>
        {errors && <p className='text-danger'>{errors.name} {errors.statusCode}</p>}
          <div className='d-flex flex-column align-items-start gap-1'>
            {/* Title Section*/}
            <div className='d-flex flex-column justify-content-start gap-1'>
                <label className="fw-bold">Title</label>
                <input type="Title" className="border border-2 border-secondary-light shadow-sm " name="title" value={formData.title} onChange={handleChange} onClick={() => setEnteredForm(true)}/>
            </div>
            {/* Front-end Error*/}
            {formErrors.title && <div className={enteredForm? "errorMessage" : "hidden"}>Front-end:{formErrors.title}</div>}
            {/* Back-end Error*/}  
            {errors.validations?.title && <div>{errors.validations.title}</div>}
            
            {/* Author Name Section*/}
            <div className='d-flex flex-column justify-content-start gap-1'>
                <label className="fw-bold">Author Name</label>
                <input type="text" className="border border-2 border-secondary-light shadow-sm " name="author" value={formData.author}  onChange={handleChange} onClick={() => setEnteredForm(true)}/>
            </div>
            {/* Front-end Error*/}
            {formErrors.author && <div className={enteredForm? "errorMessage" : "hidden"}>Front-end:{formErrors.author}</div>}
            {/* Back-end Error*/}
            {errors.validations?.author && <div>{errors.validations.author}</div>}

            {/* Page Count Section*/}
            <div className='d-flex flex-column justify-content-start gap-1'>
                <label className="fw-bold">Page Count</label>
                <input  className="border border-2 border-secondary-light shadow-sm w-50" type="number" name="pages" value={formData.pages}  onChange={handleChange} onClick={() => setEnteredForm(true)}/>
            </div>
            {/* Front-end Error*/}
            {formErrors.pages && <div className={enteredForm? "errorMessage" : "hidden"}>Front-end:{formErrors.pages}</div>}
            {/* Back-end Error*/}
            {errors.validations?.pages && <div>{errors.validations.pages}</div>}

            {/* Is Available Section*/}
            <div className='d-flex gap-2'>
                <label className="fw-bold">Is it Available?</label>
                <input type="checkbox" className="form-check-input border border-2" name="isAvailable" checked={formData.isAvailable} onChange={handleChange}/>
            </div> 

            {/* Button Section*/}
            <div>
                <button className='btn btn-info custom-shadow text-white rounded-5 mt-3' style={{width:'145px'}} type="submit" disabled={!validateForm()}>Add Book!</button> 
            </div>
          </div> 
          </div>
        </form>
        
    </div>
  )
}

export default BookForm