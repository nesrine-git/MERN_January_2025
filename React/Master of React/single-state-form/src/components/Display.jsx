import React, {useParams} from 'react'

const Display = ({form}) => {
    
    return (
        <div>
            {form ? (
            <div className='container py-3 px-5'>
            <h5 className='mx-5'>Your Form Data</h5>
            <div>
                <p><strong>First Name</strong>{form.firstName}</p>
                <p><strong>Last Name</strong> {form.lastName}</p>
                <p><strong>Email</strong> {form.email}</p>
                <p><strong>Password</strong> {form.password}</p>
                <p><strong>Confirm Password</strong> {form.confirmPassword}</p>
            </div>
            </div>
        ) :  ""}

        </div>
    )
}

export default Display