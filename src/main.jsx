import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// PAGES
import Home from './pages/Home.jsx';
import Play from './pages/Play';
import NotFound from './pages/NotFound';

// ROUTER SETUP
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/play",
    element: <Play />,
  },
]);

// ROOT SETUP
ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="overflow-x-hidden">
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </div>
)
