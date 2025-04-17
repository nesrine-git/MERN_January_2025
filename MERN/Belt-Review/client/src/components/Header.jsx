import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='border-bottom border-3 border-dark text-center'>
      <h1>Notes</h1>
      <span className='d-flex justify-content-around align-item-center p-3'>
        <Link to="/">Home</Link>
        <Link to="/notes">Create</Link>
      </span>
    </div>
  )
}

export default Header