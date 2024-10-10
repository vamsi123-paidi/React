import { useReducer } from 'react';
import CartContext from './Context';

const initialState = {
    cart: [],
};

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'addToCart': {
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
        }
        case 'removeFromCart': {
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload),
            };
        }
        case 'clearall' : {
            return {
                ...state,
                cart : state.cart.filter((item)=> item.initialState)
            }
        }
        default:
            return state;
    }
};

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
