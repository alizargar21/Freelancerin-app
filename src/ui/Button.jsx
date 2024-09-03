import React from 'react'

const Button = ({name , title , className  , onClick}) => {
  return (
          <button className={className} onClick={onClick} id={name}>{title}</button>
  )
}

export default Button