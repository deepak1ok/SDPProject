import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../../Context/UserContext'

function Profile() {
  const {user}=useContext(UserContext);
  console.log(user);
  return (
    <div>
      
    </div>
  )
}

export default Profile
