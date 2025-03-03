import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const PlanetsDisplay = () => {

    const[planets, setPlanets] = useState(null)
    const {idValue} = useParams()
    const nav = useNavigate()

    useEffect(() => {
        axios.get("https://swapi.dev/api/planets/"+ idValue)
            .then(res =>  setPlanets(res.data))
            .catch((err)=> nav("/error"))
    }, [idValue])  // ✅ Refetches when 'idValue' changes
  return (
    <div>
    {planets ? (
        <div>
        {/* Planet Name */}
        <h4 className = "fw-bold">{planets.name}</h4>

        {/* Details Container */}
        <div className="d-flex flex-column align-items-start gap-2">
            {/* Climate */}
            <div className="d-flex justify-content-start align-items-center gap-2">
            <h6 className="mb-0 fw-bold">Climate:</h6>
            <p className="mb-0">{planets.climate}</p>
            </div>

            {/* Terrain */}
            <div className="d-flex align-items-center gap-2">
            <h6 className="mb-0 fw-bold">Terrain:</h6>
            <p className="mb-0">{planets.terrain}</p>
            </div>

            {/* Surface Water */}
            <div className="d-flex align-items-center gap-2">
            <h6 className="mb-0 fw-bold">Surface Water:</h6>
            <p className="mb-0">{planets.surface_water}</p>
            </div>

            {/* Population */}
            <div className="d-flex align-items-center gap-2">
            <h6 className="mb-0 fw-bold">Population:</h6>
            <p className="mb-0">{planets.population}</p>
            </div>
        </div>
        </div>
  ) : (
    <h2>Loading ...</h2>
  )}
</div>

  )
}

export default PlanetsDisplay