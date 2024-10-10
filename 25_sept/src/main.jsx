import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './App.css';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cart from './Components/Cart.jsx';
import CartProvider from './Components/CartProvider.jsx';

const queryClient = new QueryClient();

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: 'cart',
        element: <Cart />
    }
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <CartProvider>
                <RouterProvider router={router} />
            </CartProvider>
        </QueryClientProvider>
    </StrictMode>
);
