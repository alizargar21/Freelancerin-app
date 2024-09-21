import React from 'react'
const UserAvatar = ({user}) => {
     
  return (
    <div className='flex items-center gap-x-2 text-secondary-600'>
          <img src="/user.jpg" alt="user-account" className='object-center object-cover rounded-full w-7 h-7 '/>
          <span>{user?.name}</span>
    </div>
  )
}

export default UserAvatar