import React, { useContext } from 'react';
import CartContext from './Context';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
// import NavComp from './NavComp';

const Cart = () => {
  const { state, dispatch } = useContext(CartContext);

  return (
    <>
      {/* <NavComp /> */}
      <div className="container-fluid mt-5">
        {state.cart.length > 0 ? (
          <div className="row">
            {state.cart.map((item) => (
              <div key={Math.random()} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                <div className="card product-card">
                  <img src={item.image} alt={item.title} className="product-img" />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-price">${item.price}</p>
                    <p className="card-description">{item.description}</p>
                    <Button
                      variant="outline-danger"
                      onClick={() => dispatch({ type: 'removeFromCart', payload: item.id })}
                    >
                      Remove From Cart
                    </Button>
                  </div>
                </div>
                <Button
                  variant="outline-danger"
                  onClick={() => dispatch({ type: 'clearall', payload: item.id })}
                >
                  clear all
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <h2>Add Something to your cart</h2>
        )}
      </div>
    </>
  );
};

export default Cart;
