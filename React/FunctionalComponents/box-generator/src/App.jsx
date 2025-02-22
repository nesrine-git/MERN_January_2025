import { useState } from 'react'
import React from 'react'
import BoxForm from './components/BoxForm'
import BoxDisplay from './components/BoxDisplay'
import './App.css'

function App() {

  const [boxes, setBoxes] = useState([]);

// handleUpdate function preferred over passing setLiftedState directly,
// is safer and more maintainable(ex: If multiple children need to update state differently,
//  the parent can provide different handlers.) 

  const updateBoxes = (newBox) => {
    //* If Box data is not object, we need to make in an array
    if (!Array.isArray(newBox)) {
      newBox= [newBox] 
    }
//* State Updates Are Asynchronous
// So If we update the state multiple times in a row,
// using the previous state guarantees we're not relying on an outdated value.
    setBoxes((prevBoxes) => [...prevBoxes, ...newBox])
}

  const deleteBox = (id) => {
    setBoxes((prevBoxes) => prevBoxes.filter((box, index) => index !== id))
  }


  return (
    <div className='container d-flex flex-column justify-content-center align-items-center gap-5'>
        <BoxForm updateBoxes = {updateBoxes}/>
        <BoxDisplay boxes = {boxes} deleteBox = {deleteBox}/> 
    </div>
  )
}

export default App