import React from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'

const productDetails = {
    1:{
        name : "Laptop",
        description : "This was an amazing laptop",
        picture:'https://www.techtarget.com/rms/onlineimages/hp_elitebook_mobile.jpg'
    },
    2:{
        name : "Mobile",
        description : "Mobiles are anywhere",
        picture:'https://ikall.in/wp-content/uploads/2023/06/51sJmHfw92L._SL1000_.jpg'
    },
    3:{
        name : "Speakers",
        description : "Speakers are built to shake",
        picture:'https://www.jiomart.com/images/product/original/492166279/marshall-kilburn-2-bluetooth-speaker-with-up-to-20-hours-black-and-brass-digital-o492166279-p590798533-2-202109210524.jpeg?im=Resize=(420,420)'
    },
    4:{
        name : "Shirts",
        description : "shirts are awsome!",
        picture:'https://5.imimg.com/data5/XQ/ML/TL/SELLER-69111335/high-quality-mens-long-sleeve-shirts1.jpg'
    },
    5:{
        name : "Trousers",
        description : "Trousers are good fit for official's",
        picture:'https://godwincharli.com/cdn/shop/collections/Group_4_878378ec-4548-49ad-8e07-b59c1e551e60.jpg?v=1649759643'
    }
}

const Product = () => {
    const {id} = useParams();
    const product = productDetails[id]

  return (
    <div>
        <h1>Product Details</h1>
        <img src={product.picture} alt={product.name}/>
        <h2>Product Name : {product.name}</h2>
        <p></p>Description : {product.description}
        <ul>
            <li>
                <Link to='reviews'>Reviews</Link>
            </li>
            <li>
                <Link to='specifications'>Specifications</Link>
            </li>
        </ul>
        <Outlet />
        <button>
            <Link to='/'>Go back To Home</Link>
        </button>
    </div>
  )
}

export default Product
