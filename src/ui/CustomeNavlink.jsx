import React from 'react'
import { NavLink } from 'react-router-dom'

const CustomeNavlink = ({path , title , icon}) => {
const navlinkStyle = "flex items-center gap-x-2 hover:bg-primary-100/50 hover:text-primary-900 px-2 py-1.5 text-secondary-600 rounded-lg transition-all duration-300 "
  return (
   <NavLink to={path}  className={({isActive}) => isActive ? `${navlinkStyle} bg-primary-100/50 text-primary-900`: `${navlinkStyle} text-secondary-600`}>
          <span>{icon}</span>
          <span>{title}</span>
   </NavLink>
  )
}

export default CustomeNavlink