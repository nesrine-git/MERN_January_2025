import React from 'react'

const TabDisplay = ({activeTab}) => {
  return (
    <div className='border border-2 p-3 fs-5' style={{height: "350px"}}>
        <p>{activeTab}</p>
    </div>
  )
}

export default TabDisplay