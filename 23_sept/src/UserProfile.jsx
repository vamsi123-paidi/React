import React, { useContext } from 'react'
import {usercontext} from './UserProvider'


const UserProfile = () => {
    const {user} = useContext(usercontext)
  return (
    <div>  
      <h1>User Profile</h1>
      <h3>name : {user.name}</h3>
      <p>age : {user.age}</p>
    </div>
  )
}

export default UserProfile
