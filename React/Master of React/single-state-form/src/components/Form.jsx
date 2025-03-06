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
    
    // Function to handle input changes
    const handleChange = (e) => {
        //console.log("Updating:", e.target.name, "to", e.target.value); 
        const updatedData = prevFormData => ({...prevFormData, 
            [e.target.name]: e.target.value})
        setFormData(updatedData);

        addForm(updatedData);
    };


    return (
    <div className='container px-5 '>
        
            {/* First Name Section */}
            <div>
                <div className='form-group row  align-items-center mb-1' style={{height: "55px"}}>
                    <label className='col-sm-2 col-form-label'>First Name</label>
                    <div className="col-sm-4">
                    <input type="text" name="firstName" value={formData.firstName} className='form-control' onChange={handleChange} />
                    </div>
                </div>
            {/* Last Name Section */}   
                <div className='form-group row  align-items-center mb-1' style={{height: "55px"}}>
                    <label className='col-sm-2 col-form-label'>Last Name</label>
                    <div className="col-sm-4">
                    <input type="text" name="lastName" value={formData.lastName} className='form-control' onChange={handleChange}/>
                    </div>
                </div>
            {/* Email Address Section */}
                <div className='form-group row align-items-center mb-1' style={{height: "55px"}}>
                    <label className='col-sm-2 col-form-label'>Email</label>
                    <div className="col-sm-4">
                    <input type="email" name="email" value={formData.email} className='form-control' onChange={handleChange} />
                    </div>
                </div>

            {/* Password Section */}
                <div className='form-group row align-items-center mb-1' style={{height: "55px"}}>
                    <label className='col-sm-2 col-form-label'>Password</label>
                    <div className="col-sm-4">
                    <input type="password" name="password" value={formData.password} className='form-control' onChange={handleChange}/>
                    </div>
                </div>

            {/* Confirm Password Section */}
                <div className='form-group row align-items-center mb-1' style={{height: "55px"}}>
                    <label className='col-sm-2 col-form-label'>Confirm Password</label>
                    <div className="col-sm-4">
                    <input type="password" name="confirmPassword" value={formData.confirmPassword} className='form-control' onChange={handleChange}/>
                    </div>
                </div>  

                </div>    

    </div>
  )
}

export default Form