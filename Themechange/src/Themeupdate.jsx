import React from 'react'
import { themeContext } from './Themeprovider'
import { useContext } from 'react'

const Themeupdate = () => {
    const {theme,setTheme} = useContext(themeContext)
    const handleChange = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        
        setTheme(newTheme);
        
        if (newTheme === 'light') {
            window.document.body.style.backgroundColor = 'white';
            window.document.body.style.color = 'black';
        } else {
            window.document.body.style.backgroundColor = 'black';
            window.document.body.style.color = 'white';
        }
    };

    return (
        <div>
            <p>Current theme: {theme}</p>
            <button onClick={handleChange}>Change Theme</button>
        </div>
  )
}

export default Themeupdate
