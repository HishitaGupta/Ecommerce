import { useState } from 'react'
import ProductList from './features/product-list/ProductList'
import Home from './features/pages/Home'
import LoginPage from './features/pages/LoginPage'
import SignupPage from './features/pages/SignupPage'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import CartPage from './features/pages/CartPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home></Home>),
  },
  {
    path: "/login",
    element: (<LoginPage></LoginPage>),
  },
  {
    path: "/signup",
    element: (<SignupPage></SignupPage>),
  },
  {
    path: "/cart",
    element: (<CartPage></CartPage>),
  },
]);




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='App'>
     <RouterProvider router={router} />
     </div>
    </>
  )
}

export default App
