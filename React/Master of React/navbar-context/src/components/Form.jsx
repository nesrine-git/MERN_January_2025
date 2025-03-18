import React, { useContext } from 'react'
import FirstContext from '../context/MyContext'

const Form = () => {
    const{name, setName} = useContext(FirstContext)
  return (
      <div className="form-group row align-items-center p-5">
        <label className="col-sm-2 col-form-label fw-normal">Your name:</label>
        <div className="col-sm-6 ">
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control bg-light" style={{ color: "gray" }}/>
        </div>
     </div>

  )
}

export default Form