import { useState } from 'react'
import '../App.css';


const PersonCard = (props) => {
    
    const {firstName, lastName, age, hairColor} = props

    const [currentAge, setCurrentAge] =useState(age);

    const handleClick = () => {
        setCurrentAge(currentAge +1);
    };

    
    return (
        <div className="d-flex flex-column align-items-center gap-4 p-4">
            <div className="d-flex flex-column">
                {/* 'm-0' removes all margins, 'fw-normal' sets the font weight to normal */}
                <h1 className='m-0 fw-normal'>{firstName}, {lastName} </h1>
                <p className='m-0'> Age: {currentAge} </p>
                <p className='m-0'>Hair Color: {hairColor}</p>  
            </div>  
            <button className="btn btn-light custom-btn px-4" onClick = {handleClick}>
                Birthday Button {lastName} {firstName} 
            </button>          
        </div>
    )
}

export default PersonCard