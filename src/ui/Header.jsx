import React from 'react'
import useUser from '../features/Authentication/useUser'

const Header = () => {
         const {data} =  useUser()
  return (
    <div className='bg-secondary-0 py-4 px-8'>Header</div>
  )
}

export default Header