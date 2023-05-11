import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './routes/Home'
import ListCat from './routes/ListCat'
import Search from './routes/Search'
import Produto from './routes/Produto'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/categoria/:id',
        element: <ListCat />
      },
      {
        path: '/pesquisa/:nome',
        element: <Search />
      },
      {
        path: '/produto/:id',
        element: <Produto />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)