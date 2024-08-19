import React from 'react'

const Flexwrapper = ({children, className = ''}) => {
  return (
    <div className={`flex justify-between items-center  ${className}`}>{children}</div>
  )
}

export default Flexwrapper