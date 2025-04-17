import React, { useState } from 'react'

const Form = ({ formData, errors , formErrors , onChange, onSubmit }) => {

        // hide client-errors on Load
        const [enteredForm, setEnteredForm] = useState(false)
        // Disabled button function
        const validateForm = () => {
            return Object.values(formErrors).every(value => value === '');
        }

    return (
        <div className='container p-4'>       
            <form onSubmit={onSubmit}>
                {/* Title */}
                <div className='row mb-3'>
                    <label className="fw-bold col-sm-2">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={onChange}
                        onClick={() => setEnteredForm(true)}
                        className="col-sm-4"
                    />
                    {/* Front-end Error*/}
                    {formErrors.title && <div className={enteredForm? "errorMessage" : "hidden"}>{formErrors.title}</div>}
                    {/* Back-end Error*/}  
                    {errors.validations?.title && <div>{errors.validations.title}</div>}
                    
                </div>
                {/* content */}
                <div className='row mb-3'>
                    <label className="fw-bold col-sm-2">content</label>
                    <textarea
                        name="content"
                        value={formData.content}
                        onChange={onChange}
                        onClick={() => setEnteredForm(true)}
                        className="col-sm-8"
                    />
                    {/* Front-end Error*/}
                    {formErrors.content && <div className={enteredForm? "errorMessage" : "hidden"}>{formErrors.content}</div>}
                    {/* Back-end Error*/}  
                    {errors.validations?.content && <div>{errors.validations.content}</div>}
                </div>
                {/* Is Important */}
                <div className='form-check mb-3'>
                    <input
                    type="checkbox"
                    name="important"
                    checked={formData.important}
                    onChange={onChange}
                    className="form-check-input"
                    />
                    <label className="form-check-label">Important?</label>
                </div>
                <button className="btn btn-primary" disabled={!validateForm()}>
                    Create
                </button>
            
            </form>
        </div>
);
};
export default Form