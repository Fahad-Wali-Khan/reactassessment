import React from 'react'
import Home from './Home'
import User from './User'
import Delete from './Delete'
import Update from './Update'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/user",
      element: <User></User>,
    },
    {
      path: "/update",
      element: <Update></Update>,
    },
    {
      path: "/delete",
      element: <Delete></Delete>,
    },
  ]);
  return (
  <RouterProvider router={router} />
  )
}
