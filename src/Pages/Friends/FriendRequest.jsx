import React from 'react'
import SingleRequest from '../../Components/SingleRequest'

const FriendRequest = () => {
  return (
    <div>
      <span className='text-sm text-slate-500'>You have 4 friend requests.</span>
      <SingleRequest />
      <SingleRequest />
      <SingleRequest />
      <SingleRequest />
    </div>
  )
}

export default FriendRequest