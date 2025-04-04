import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import TitleContext from '../context/TitleContext'

const Header = () => {
  const {title} = useContext(TitleContext)
  const nav = useNavigate()

  return (
    <div className='d-flex justify-content-between align-items-center border border-3 border-dark py-3 px-4' style={{backgroundColor:"#eeeeee"}}>
        <div className='d-flex  flex-column justify-content-around align-items-center gap-2'>
            <button className='btn btn-info custom-shadow text-white rounded-5' style={{width:'115px'}} onClick={() => nav('/')}>Catalog</button>
            <button className='btn btn-info custom-shadow text-white rounded-5' style={{width:'115px'}} onClick={() => nav('/create')}>Add Book</button>
        </div>
        <div>
            <h1>{title}</h1>
        </div>
    </div>
  )
}

export default Header