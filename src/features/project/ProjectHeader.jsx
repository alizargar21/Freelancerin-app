import React from 'react'
import Button from '../../ui/Button'
import { HiArrowRight } from 'react-icons/hi'
import useMoveBack from '../../hooks/useMoveBack';

const ProjectHeader = ({project}) => {
          const moveBack = useMoveBack();
  return (
    <div className='flex items-center gap-x-4 mb-8'>
          <Button  title={<HiArrowRight />} onClick={moveBack}/>
          <h1 className='font-black text-secondary-700 text-xl'>لیست درخواست های شما {project.title}</h1>
    </div>
  )
}

export default ProjectHeader