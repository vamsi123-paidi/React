import React from 'react'
import { useParams } from 'react-router-dom'
// import { Link, Outlet } from 'react-router-dom'
const reviewDetails = {
  1:{
    name : 'Laptop',
    review : 'Its Good to Buy'
  },
  2:{
    name : 'Mobile',
    review : 'its ok'
  },
  3:{
    name : 'Speakers',
    review : 'Marvelous'
  },
  4:{
    name : 'Shirts',
    review : 'nice'
  },
  5:{
    name : 'Trousers',
    review : 'ok'
  },
}

const Reviews = () => {
  const {id} = useParams();
  const review = reviewDetails[id]
  return (
    <div>
      <p>Review for {review.name}</p>
      <p>{review.review}</p>
      {/* <button>
        <Link to='/' >Go To Home Page</Link>
      </button>
     <Outlet /> */}
    </div>
  )
}

export default Reviews
