import React from 'react'

const TabHeader = (props) => {
  const {toggleContent, index, isActive, children} = props
  return (
    <>
      <button className={`border border-2 px-3 py-2 ${ isActive ? 'custom-bg' : 'bg-light'}`} onClick={() => toggleContent(index)} >
          <h1>{children}</h1>
      </button>
    </>
    
  )
}

export default TabHeader