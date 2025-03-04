import React, { useState } from 'react'

const Form = ({addForm}) => {
    // State to store form data
    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",  
        email:"",
        password:"",
        confirmPassword:"",      
    })
    // State to store validation errors
    const [errors, setErrors] = useState({});

    // Function to handle input changes
    const handleChange = (e) => {
        setFormData(prevFormData => ({...prevFormData, 
            [e.target.name]: e.target.value}));
    };

    // Function to validate form fields
    const validateForm = () => {
        let newErrors = {};
    
        if (!formData.firstName) newErrors.firstName = "❌ First Name is required ❌";
        else if (formData.firstName.length < 3)
            newErrors.firstName = "First Name must be at least 3 characters";
        if (!formData.lastName) newErrors.lastName = "❌ Last Name is required ❌";
        else if (formData.lastName.length < 3)
            newErrors.lastName = "Last Name must be at least 3 characters";
        if (!formData.email) newErrors.email = "❌ Email is required ❌";
        if (!formData.password) newErrors.password = "❌ Password is required ❌";
        if (formData.password.length < 6)
            newErrors.password = "Password must be at least 6 characters";
        if (formData.confirmPassword !== formData.password)
            newErrors.confirmPassword = "Passwords do not match";
    
        setErrors(newErrors);
    
        return Object.keys(newErrors).length === 0;
    };
    
    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (validateForm()) {
            addForm(formData)
            setFormData({
                firstName:"",
                lastName:"",  
                email:"",
                password:"",
                confirmPassword:"",      
            })
            setErrors({});
        } 
         
    };

    return (
    <div className='container px-5 '>
        <form onSubmit={handleSubmit}>
            {/* First Name Section */}
            <div>
                <div className='form-group row  align-items-center mb-1' style={{height: "55px"}}>
                    <label className='col-sm-2 col-form-label'>First Name</label>
                    <div className="col-sm-4">
                    <input type="text" name="firstName" value={formData.firstName} className='form-control' onChange={handleChange} />
                    </div>
                </div>
                {errors.firstName ? <p className="text-danger">{errors.firstName}</p> : ""}
            {/* Last Name Section */}   
                <div className='form-group row  align-items-center mb-1' style={{height: "55px"}}>
                    <label className='col-sm-2 col-form-label'>Last Name</label>
                    <div className="col-sm-4">
                    <input type="text" name="lastName" value={formData.lastName} className='form-control' onChange={handleChange}/>
                    </div>
                </div>
                {errors.lastName ? <p className="text-danger">{errors.lastName}</p> : ""}
            {/* Email Address Section */}
                <div className='form-group row align-items-center mb-1' style={{height: "55px"}}>
                    <label className='col-sm-2 col-form-label'>Email</label>
                    <div className="col-sm-4">
                    <input type="email" name="email" value={formData.email} className='form-control' onChange={handleChange} />
                    </div>
                </div>
                {errors.email ? <p className="text-danger">{errors.email}</p> : ""}
            {/* Password Section */}
                <div className='form-group row align-items-center mb-1' style={{height: "55px"}}>
                    <label className='col-sm-2 col-form-label'>Password</label>
                    <div className="col-sm-4">
                    <input type="password" name="password" value={formData.password} className='form-control' onChange={handleChange}/>
                    </div>
                </div>
                {errors.password ? <p className="text-danger">{errors.password}</p> : ""}
            {/* Confirm Password Section */}
                <div className='form-group row align-items-center mb-1' style={{height: "55px"}}>
                    <label className='col-sm-2 col-form-label'>Confirm Password</label>
                    <div className="col-sm-4">
                    <input type="password" name="confirmPassword" value={formData.confirmPassword} className='form-control' onChange={handleChange}/>
                    </div>
                </div>  
                {errors.confirmPassword ? <p className="text-danger">{errors.confirmPassword}</p> : "" } 
                </div>    
            {/* Button Section */} 
                <input type="submit"  className="btn btn-success mt-3" value="Submit" style={{ width: "120px"}} />
            
      </form>
    </div>
  )
}

export default Form