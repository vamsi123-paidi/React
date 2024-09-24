import React from 'react'
import {UserProvider} from './UserProvider'
import UserProfile from './UserProfile'
import UserUpdate from './UserUpdate'
import "./App.css"

const App = () => {
  return (
    <>
      <UserProvider>
        <UserProfile />
        <UserUpdate />
      </UserProvider>
    </>
  )
}

export default App
