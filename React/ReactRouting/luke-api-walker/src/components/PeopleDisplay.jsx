import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams, Link } from 'react-router-dom'

const PeopleDisplay = () => {

    const[people, setPeople] = useState(null)
    const[homeworld, setHomeworld] = useState(null)
    const {idValue} = useParams()
    const nav = useNavigate()
    
    // Fetch people data
    useEffect(() => {
        axios.get("https://swapi.dev/api/people/"+ idValue)
            .then(res =>  setPeople(res.data))
            .catch((err)=>  nav("/error"))
    }, [idValue])  // ✅ Refetches when 'idValue' changes


    // Fetch homeworld data
    useEffect(() => {
        setHomeworld(null); // ✅ Reset homeworld when 'people' changes

        if (people && people.homeworld) { // ✅ Check if 'people' is not null
            axios.get(people.homeworld)
                .then(res => setHomeworld(res.data))
                .catch(err => nav("/error") )
        }
    }, [people]); // ✅ Depend on 'people' to avoid errors on first render

    (!people) ? <h2>Loading...</h2> : null


  return (
    <div>
        {
            people ? (
                <div>
                    {/* Person's Name */}
                    <h4 className = "fw-bold">{people.name}</h4>

                    {/* Details Section */}
                    <div className="d-flex flex-column align-items-start gap-1">
                        <div className="d-flex align-items-center gap-2">
                        <h6 className="mb-0 fw-bold">Height:</h6>
                        <p className="mb-0">{people.height} cm</p>
                        </div>
                        
                        <div className="d-flex align-items-center gap-2">
                        <h6 className="mb-0 fw-bold">Hair Color:</h6>
                        <p className="mb-0">{people.hair_color}</p>
                        </div>

                        <div className="d-flex align-items-center gap-2">
                        <h6 className="mb-0 fw-bold">Eye Color:</h6>
                        <p className="mb-0">{people.eye_color}</p>
                        </div>

                        <div className="d-flex align-items-center gap-2">
                        <h6 className="mb-0 fw-bold">Skin Color:</h6>
                        <p className="mb-0">{people.skin_color}</p>
                        </div>
                
                        <div className="d-flex align-items-center gap-2">
                            <h6 className="mb-0 fw-bold">Homeworld:</h6>
                            <p className="mb-0">{homeworld ?  
                                <Link to={homeworld.url} className="mb-0">{homeworld.name}</Link> 
                                 : "Loading..."}</p>
                        </div>
                    </div>
                    </div>

            ) :<h2>Loading ...</h2>
            
        
        }
    </div>
  )
}

export default PeopleDisplay