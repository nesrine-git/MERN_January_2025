import React from 'react'
import '../App.css'

const BoxDisplay = ({ boxes, deleteBox }) => {

  
  return (
    <div className="d-flex flex-wrap gap-3 pb-3">
      {boxes.map((box, index) => (
        <div key={index} className="position-relative">
          {/* Box */}
          <div
            style={{
              width: box.width,
              height: box.height,
              backgroundColor: box.backgroundColor,
              borderRadius: '5px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
              position: 'relative',
            }}
          ></div>

          {/* Delete Button */}
          <button
            className={`btn btn-sm`}
            style={{
              position: 'absolute',
              top: '-10px',
              left: '50%',
              transform: 'translateX(-50%)',
              borderRadius: '50%',
              width: '20px',
              height: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'white',
              color: 'black',
              border: '1px solid gray',
              boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
            onClick={() => deleteBox(index)}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}

export default BoxDisplay;