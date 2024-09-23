import React from 'react'
import ProposalsTable from './ProposalsTable'
import ProposalsHeader from './ProposalsHeader'

const Proposals = () => {
  return (
    <div className='font-black text-secondary-700 text-xl mb-8'>
      <ProposalsHeader />
      <ProposalsTable />
    </div>
  )
}

export default Proposals