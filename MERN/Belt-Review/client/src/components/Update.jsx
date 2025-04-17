import React, { useState,  useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Form from './Form';
import NoteService from '../services/NoteService';

const Update = () => {
  
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    important: false
  });
    // Server errors
    const [errors, setErrors] = useState({});
    // Client errors
    const [formErrors, setFormErrors] = useState({
      title: "",
      content: "",
    })

    const nav = useNavigate();
    useEffect(() => {
      NoteService.getOneNote(id)
          .then((res) => {
              if (res.success) {
                  console.log(res.data);
                  setFormData(res.data);  
              } else {
                  console.error(res.message);
                  }
              })
              .catch((err) => {
                  console.log(err);
              });
  }, [id])
    // Handle changes in the input fields
    const handleChange = (e) => {
        const { name, type, value, checked } = e.target;
        setFormData((prevState) => ({
          ...prevState,
          [name]: type === "checkbox" ? checked : value
        }));
        //* Initialize error message variable
        let errorMsg = '';
        const val = value.trim();
        //* Validate the specific field based on its name
        if (name === 'title') {
          if (val === '') {
            errorMsg = 'Title of note is required';
          } else if (val.length < 3) {
            errorMsg = 'Title of note must be at least 3 characters long!';
          } else if (val.length > 120) {
            errorMsg = 'Title of note must be less than 120 characters long';
          }
        }
        if (name === 'content') {
          if (val === '') {
            errorMsg = 'Content of note is required!';
          } else if (val.length < 3) {
            errorMsg = 'Content of note must be at least 3 characters long!';
          } else if (val.length > 500) {
            errorMsg = 'Content note must be at most 500 characters long!';
          }
        }
        //* Update the formErrors state with the error for the current field
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          [name]: errorMsg
        }));
        //* old server-errors are cleared as the user types
        setErrors((prev) => ({ ...prev, [name]: null }));  
    };
    
    // Handle form submission
    const handleSubmit = (e) => {
      e.preventDefault()
      NoteService.updateOneNote(formData)
            .then(res => {
                console.log(res);
                nav(`/notes/${id}`);
            })
            .catch((err) => {
                setErrors(err.response.data)
            })
    }


    return (
      <div>
        <Form       
          formData={formData}
          errors={errors}
          formErrors={formErrors}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </div>
    )
}

export default Update