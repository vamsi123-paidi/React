import React from 'react'
import { Themeprovider } from './Themeprovider'
import Themedisplay from './Themedisplay'
import Themeupdate from './Themeupdate'
import './App.css'

const App = () => {
  return (
    <div>
      <Themeprovider>
        <Themedisplay />
        <Themeupdate />
      </Themeprovider>
    </div>
  )
}

export default App
