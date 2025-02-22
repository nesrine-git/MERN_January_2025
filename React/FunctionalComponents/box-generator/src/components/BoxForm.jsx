import React, { useState } from 'react';
import '../App.css'

const BoxForm = (props) => {

    //Destructure updateBoxes from props
    const {updateBoxes} = props

    // States for the box properties
    const [color, setColor] = useState('#563d7c');
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');
    const [error, setError] = useState(''); // State for validation messages
    
    // Handle color change
    const handleColorChange = (e) => {
    setColor(e.target.value);
    };

    // Validate size : prevents bad input
    const MIN_SIZE = 20;  // Minimum allowed size
    const MAX_SIZE = 500; // Maximum allowed size

    const validateSize = (value) => {
    if (!value) return 'Size is required';   // Prevent empty input
    if (isNaN(value)) return 'Must be a number';  // Check if it's a number
    if (value < MIN_SIZE) return `Minimum size is ${MIN_SIZE}px`; // Check minimum
    if (value > MAX_SIZE) return `Maximum size is ${MAX_SIZE}px`; // Check maximum
    return ''; // No error
};
    // Handle width change
    const handleWidthChange = (e) => {
        const newWidth = e.target.value;
        setWidth(newWidth);
        setError(validateSize(newWidth)); // Validate width
    };

    // Handle height change
    const handleHeightChange = (e) => {
        const newHeight = e.target.value;
        setHeight(newHeight);
        setError(validateSize(newHeight)); // Validate height
    };

    // Handle new box 
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!width || !height || error) return; // Prevent adding invalid boxes

            let newBox = {
            // No need for parseInt because these values are used for CSS styles
            // CSS accepts width/height as strings with "px", so they work as is
                width: `${width}px`,
                height: `${height}px`,
                backgroundColor: color,
            }
        // Add new box to the list of generated boxes
        updateBoxes(newBox);
        // Reset input fields
        setWidth('');
        setHeight('');
        setColor('#563d7c');
        setError('');
    }
    

  return (
    <>
        <form onSubmit= {handleSubmit} >
            <div className="container d-flex flex-column justify-content-center gap-3 p-3">
                {/* Title Section */}
                <h1 className="text-center" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
                    Box Generator Master
                </h1>
                
                {/* Color Picker Section */}
                <div>
                    <label className="form-label">Choose Your Color</label>
                    <input type="color" aria-label="Choose your color" className="form-control form-control-lg" 
                    value={color} onChange={handleColorChange} />
                </div>
                {/* Size Inputs Section*/}
                <div>
                    <label className="form-label">Set Box Size</label>
                    <div className="d-flex justify-content-between">
                        <input type="number" className="form-control form-control-lg" placeholder="Width (px)" value={width}
                            onChange={handleWidthChange}  style={{ width: '48%' }} />
                        <input type="number" className="form-control form-control-lg" placeholder="Height (px)" value={height}
                            onChange={handleHeightChange} style={{ width: '48%' }} />
                    </div>
                    {error && <div className="text-danger mt-1">{error}</div>} {/* Show error message */}
                </div>

                {/* Button to generate the box */}
                <div className="text-center">
                {/* Disable button if input is invalid*/}
                    <button className="btn btn-primary w-100 py-2" style={{ fontWeight: 'bold', borderRadius: '5px' }}  disabled={!!error || !width || !height}>
                        Add
                    </button>
                </div>
            </div>

        </form>
    </>
  )

}

export default BoxForm