import React, { useContext } from 'react'
import {usercontext} from './UserProvider'

const UserUpdate = () => {
    const {user,setUser} = useContext(usercontext) 
    const HandleChange = ()=>{
        setUser({...user,name:"yagnesh"})
    }

  return (
   <div>
      <button onClick={HandleChange}>Change Name</button>
    </div>
  )
}

export default UserUpdate
