import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'

const themeContext = createContext()
const Themeprovider = ({children}) => {
    const [theme,setTheme] = useState('light')
  return (
    <>
      <themeContext.Provider value={{theme,setTheme}}>
        {children}
      </themeContext.Provider>
    </>
  )
}

export  {Themeprovider,themeContext}
