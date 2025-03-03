import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom';

const Form = () => {

  const [idValue, setIdValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("people");

  const nav = useNavigate()

  const handleSelect = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleIdInput = (e) => {
    setIdValue(e.target.value); 
  };

  const SubmitHandler = (e) => {
    e.preventDefault()
    const parsedId = parseInt(idValue);
    if (parsedId) {
      nav(`/${selectedOption}/${parsedId}`);
    }
  }


  return (
    <div>
        <form onSubmit={SubmitHandler}>
          <div className="d-flex justify-content-center gap-5 ">
            {/* Select Section */}
            <div className="d-flex align-items-center gap-2">
              <label className="col-auto col-form-label">Search for:</label>
              <select className="form-select" value={selectedOption} onChange={handleSelect} style={{ width: "200px", backgroundColor: "#efefef"  }}>
                <option value="people">people</option>
                <option value="planets">planets</option>
                <option value="starships">starships</option>
                <option value="vehicles">vehicles</option>
                <option value="films">films</option>
                
              </select>
            </div>

            {/* ID Input Section */}
            <div className="d-flex align-items-center gap-2">
              <label className="col-auto col-form-label">ID:</label>
              <input type="number" className="form-control" value={idValue} onChange={handleIdInput} style={{ width: "60px", backgroundColor: "#efefef" }} />
            </div>

            {/* Submit Button */}
            <div className="d-flex align-items-center gap-2">
              <button type="submit" className="btn btn-primary" style={{ width: "120px",  backgroundColor: "#021bf1"}}>Search</button>
            </div>
          </div>
        </form>
  </div>




  )
}

export default Form