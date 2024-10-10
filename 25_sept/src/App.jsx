import React, { useContext } from 'react';
import useProducts from './Hooks/useProducts';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import NavComp from './Components/NavComp';
import CartContext from './Components/Context';

const App = () => {
  const { dispatch } = useContext(CartContext);
  const { isPending, isError, data, error } = useProducts();

  const addToCart = (product) => {
    dispatch({ type: 'addToCart', payload: product });
    alert('Added to Cart Checkit')
  };

  if (isPending) {
    return <h3>Loading...</h3>;
  }

  if (isError) {
    return <h3>{error.message}</h3>;
  }

  return (
    <>
      <NavComp />
      <h1>Add It And Grab It</h1>
      <div className="container-fluid">
        <div className="row">
          {data.map((product) => (
            <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
              <div className="card product-card">
                <img src={product.image} alt={product.title} className="product-img" />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-price">${product.price}</p>
                  <p className="card-description">{product.description}</p>
                  <Button
                    variant="outline-success"
                    onClick={() => addToCart(product)}
                  >
                    Add To Favorites
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
