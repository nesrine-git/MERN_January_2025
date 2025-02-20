import { useState } from 'react';
import '../App.css'

const UserForm = () => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");

    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");

    const [emailAddress, setEmailAddress] = useState("");
    const [emailAddressError, setEmailAddressError] = useState("");

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);  // default value of false
    
    const [users, setUsers] = useState([]);
    
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
        
        // shorthand ES6 syntax for building an object
        const newUser = { firstName, lastName, emailAddress, password, confirmPassword };
        setUsers([...users, newUser]);
    	setFirstName("");
        setLastName("");
    	setEmailAddress("");
    	setPassword("");
        setConfirmPassword("");
    
        // updating state will change the message to be displayed in the form
        setHasBeenSubmitted( true );
    };

     // validations for First Name
     const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length <= 2) {
            setFirstNameError("First name needs to be more than 2 characters");
        } else {
            // an empty string is considered a "falsy" value
            setFirstNameError("");
        }
    }

     // validations for Last Name
     const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length <= 2) {
            setLastNameError("Last name needs to be more than 2 characters");
        } else {
            // an empty string is considered a "falsy" value
            setLastNameError("");
        }
    }
     // validations for Email Address
     const handleEmailAddress = (e) => {
        setEmailAddress(e.target.value);
        if(e.target.value.length <= 8) {
            setEmailAddressError("Email needs to be more than 8 characters");
        } else {
            // an empty string is considered a "falsy" value
            setEmailAddressError("");
        }
    }

     // validations for Password
     const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length <= 8) {
            setPasswordError("Password needs to be more than 8 characters");
        } else {
            // an empty string is considered a "falsy" value
            setPasswordError("");
        }
    }

    // validations for Confirm Password
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value !== password) {
            setConfirmPasswordError("Confirm password does not match");
        } else {
            // an empty string is considered a "falsy" value
            setConfirmPasswordError("");
        }
    }
    
    
    return (
        <div className='d-flex flex-column align-items-center vh-100 gap-4 p-3 '>
            <form onSubmit={ createUser } className='d-flex flex-column align-items-center'>
                <header>
                    <h2 className='serif-font fw-bold'>
                        {hasBeenSubmitted ? "Thank you for submitting the form!" : "Welcome. Please submit the form"}
                    </h2>
                </header>
                <div className='d-flex flex-column align-items-center py-3'>
                    {/* First Name */}
                    <div className=" d-flex justify-content-center custom-bg gap-3 px-2 py-1 rounded w-100 height"> 
                        <label className="d-flex align-items-center justify-content-center serif-font small w-25">First name </label> 
                        <input className='form-control w-75' type="text" value={firstName} onChange={ handleFirstName } placeholder='Please enter first name.'/>
                    </div> 

                    {/* First Name Error */} 
                    <div>
                        {firstNameError ? <p className='m-0 serif-font'>{ firstNameError }</p> : <p> {" "}</p>}
                    </div>
                    
                    {/* Last Name */}
                    <div className="d-flex justify-content-center custom-bg gap-3 px-2 py-1 w-100 rounded height">
                        <label className="d-flex align-items-center justify-content-center serif-font small w-25">Last name </label> 
                        <input className='form-control w-75' type="text" value={lastName} onChange={ handleLastName } placeholder='Please enter last name.' />
                        
                    </div> 
                    {/* Last Name Error */}   
                    <div>
                        { lastNameError ?<p className='m-0 serif-font'>{ lastNameError }</p> : <p> {" "}</p>}
                    </div>
                    {/* Email Address */}
                    <div className="d-flex justify-content-center custom-bg gap-3 px-2 py-1 w-100 rounded height">
                        <label className="serif-font small text-center w-25">Email Address </label> 
                        <input className='form-control w-75' type="text" value={emailAddress} onChange={ handleEmailAddress } placeholder='Please enter email address.' />
                    </div> 
                    {/* Email Address Error */}    
                    <div>   
                        { emailAddressError ? <p className='m-0 serif-font'>{ emailAddressError } </p> : <p> {" "}</p> }
                    </div>

                    {/* Password */}
                    <div className="d-flex justify-content-center custom-bg gap-3 px-2 py-1 w-100 rounded height">
                        <label className="d-flex align-items-center justify-content-center serif-font small w-25">Password </label>
                        <input  className='form-control w-75' type="text" value={password} onChange={ handlePassword } placeholder='Please enter password.' />
                    </div> 
                    {/* Password Error */}    
                    <div>
                        { passwordError ? <p className='m-0 serif-font'>{ passwordError } </p> : <p> {" "}</p> }
                    </div>

                    {/* Confirm Password */}
                    <div className="d-flex justify-content-center custom-bg gap-3 px-2 py-1 w-100 rounded height">
                        <label className="serif-font small text-center w-25">Confirm Password </label>
                        <input  className='form-control w-75' type="text" value={confirmPassword} onChange={ handleConfirmPassword } placeholder='Please confirm password.' />
                    </div> 
                    {/* Confirm Password Error */}   
                    <div>    
                        {confirmPasswordError ?<p className='m-0 serif-font'>{ confirmPasswordError }</p> : <p> {" "}</p> }
                    </div>
                </div>

            {/* Submit Button */}
                <button className='py-2 px-3 rounded-1 small'>Create User</button>
            </form>

            {/* Display Users */}
            <section className='text-center'>
                    <h2 className='serif-font fw-bold'>Users</h2>
                    {
                        users.map((user, index) => (
                        <div>
                            <p className='mb-0 serif-font'>{user.firstName} {user.lastName} ({user.emailAddress})</p>   
                        </div>
                        ))
                    }
            </section>
        </div>
    );
};
    
export default UserForm;
