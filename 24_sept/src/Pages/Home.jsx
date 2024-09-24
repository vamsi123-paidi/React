import React from 'react'
import { Link,useSearchParams } from 'react-router-dom'

const products = [
  {
    id : 1,
    name : 'Laptop',
    category : 'Electronics'
  },
  {
    id : 2,
    name : 'Mobile',
    category : 'Electronics'
  },
  {
    id : 3,
    name : 'Speakers',
    category : 'Electronics'
  },
  {
    id : 4,
    name : 'Shirts',
    category : 'Clothings'
  },
  {
    id : 5,
    name : 'Trousers',
    category : 'Clothings'
  }
]
const Home = () => {
  const [searchParams,setSearchParams] = useSearchParams();
  const category = searchParams.get('category');
  const filteredProducts = category? products.filter((p)=>p.category === category) : products;
  return (
    <div> 
      <h1>Product Catolog</h1>
      <button onClick={()=>setSearchParams({category:'Electronics'})}>Electronics</button>
      <button onClick={()=>setSearchParams({category:'Clothings'})}>Clothings</button>
      <button onClick={()=>setSearchParams({})}>All Products</button>
      <ul>  
      {
        filteredProducts.map((product)=>(
            <li key={product.id}>
              <Link to={`/product/${product.id}`}>{product.name}</Link>
            </li>
        ))
      }
      </ul>
    </div>
  )
}

export default Home
