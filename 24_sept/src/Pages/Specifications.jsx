import React from 'react'
import { useParams } from 'react-router-dom'
// import  { Link,Outlet } from 'react-router-dom'
const specifications = {
  1: {
    name : "Laptop",
    specification : '16GB Ram 512 SSD Intel Core i7 Inside'
  },
  2: {
    name : "Moblie",
    specification : '8GB Ram 128GB RoM Snapdragon 8Gen'
  },
  3:{
    name : "Speakers",
    specification : 'Marshall speaker Bluetooth Device'
  },
  4: {
    name : "shirts",
    specification : "It is a formal shirts"
  },
  5 : {
    name : "Trousers",
    specification : "This is a simple and formal trouser"
  }
}

const Specifications = () => {
  const {id} = useParams()
  const specification = specifications[id]
  return (
    <div>
      <p>Specifications for {specification.name}</p>
      <p>{specification.specification}</p>
      {/* <button>
        <Link to='/' >Go To Home Page</Link>
      </button>
      <Outlet /> */}
    </div>
  )
}

export default Specifications
