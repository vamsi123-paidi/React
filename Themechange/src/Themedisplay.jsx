import React from 'react'
import { themeContext } from './Themeprovider'
import { useContext } from 'react'

const Themedisplay = () => {
    const {theme} = useContext(themeContext)

  return (
    <div>
      <h1>Current Theme : {theme}</h1>
    </div>
  )
}

export default Themedisplay
