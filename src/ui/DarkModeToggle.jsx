import React from 'react'
import Button from "./Button";
import { HiOutlineSun } from 'react-icons/hi';

const DarkModeToggle = () => {
  return (
   <Button title={<HiOutlineSun  className='w-5 h-5 text-primary-500'/>}  />
  )
}

export default DarkModeToggle