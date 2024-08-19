import React from 'react'

const ColFlex = ({children, className = ''}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {children}
    </div>
  )
}

export default ColFlex
