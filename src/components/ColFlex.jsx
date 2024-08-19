import React from 'react'

const ColFlex = ({children, className = ''}) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      {children}
    </div>
  )
}

export default ColFlex
