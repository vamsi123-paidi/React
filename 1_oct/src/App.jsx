import React, { useCallback, useState } from 'react'
import './App.css'

const App = () => {
  const [age , setAge] = useState(0);
  const [salary , setSalary] = useState(5000);
  // const ageIncrement = useCallback(()=>{  // this one is using a dependencies
  //   setAge(age+1)
  // },[age])
  const ageIncrement = useCallback(()=>{   //using a prev age value and adding it,this one is used for the creation of button multiple time by creating a one time and using for multiple times 
    setAge((prevage)=> prevage+1)
  },[])
  const salaryIncrement = useCallback(()=>{
    setSalary(salary+1000)
  },[salary])

  return (
    <div>
      <h1>useCallback Hook</h1>
      <h3>Age : {age}</h3>
      <button onClick={ageIncrement}>Increment</button>
      <h3>Salary : {salary}</h3>
      <button onClick={salaryIncrement}>Increment</button>
    </div>
  )
}

export default App
