import React, { useContext } from 'react'
import FirstContext from '../context/MyContext'

const Navbar = () => {
    const{name} = useContext(FirstContext)
  return (
    <div>
        <nav className="navbar text-white" style={{backgroundColor: "#8c2fc5", height:"55px"}}>
            <div className="container-fluid d-flex justify-content-end px-3 ">
                <h2>Hi, {name}!</h2>
            </div>
        </nav>
    </div>
  )
}

export default Navbar