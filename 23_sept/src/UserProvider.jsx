import React, { createContext, useState } from 'react'
const usercontext = createContext()

const UserProvider = ({children}) => {
    const [user,setUser] = useState(
        {
            name : "Vamsi",
            age : 22
        }
    )
  return (
    <div>
        <usercontext.Provider value={{user,setUser}}>
            {children}
        </usercontext.Provider>
    </div>
  )
}

export {UserProvider,usercontext};
