import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements
} from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Contact from './Pages/Contact.jsx'
import Dashboard from './Pages/Dashboard.jsx'
import Contactus from './Components/Contactus.jsx'
import Address from './Components/Address.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home />}/>
      <Route path='contact' element={<Contact />}>
        <Route path='contactus' element={<Contactus />}/>
        <Route path='address' element={<Address />}/>
      </Route>
      <Route path='dashboard' element={<Dashboard />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <RouterProvider router = {router}>
    <App />
  </RouterProvider>,
)
