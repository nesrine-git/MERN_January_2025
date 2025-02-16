import { useState } from 'react'
import '../App.css'

const PersonCard = (props) => {
    
    const {firstName, lastName, age, hairColor} = props

    const [currentAge, setCurrentAge] =useState(age);

    const handleClick = () => {
        setCurrentAge(currentAge +1);
    };

    
    return (
        <div className='container'>
            <div>
                <h1>{firstName}, {lastName} </h1>
                <p> Age: {currentAge} </p>
                <p>Hair Color: {hairColor}</p>  
            </div>  
            <button onClick = {handleClick}>
                Birthday Button {lastName} {firstName} 
            </button>          
        </div>
    )
}

export default PersonCard