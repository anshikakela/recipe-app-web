import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Login from './components/Login.jsx'
import Pages from './pages/Pages.jsx'
import Cuisine from './pages/Cuisine.jsx'
import Searched from './pages/Searched.jsx'
import Recipe from './pages/Recipe.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Pages />
      },
      {
       path: '/cuisine/:type',
       element: <Cuisine /> 
      },
      {
        path: '/searched/:search',
        element: <Searched />
      },
      {
        path: '/recipe/:id',
        element: <Recipe />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
