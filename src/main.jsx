import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Pages/Home/Home';
import OurPortfolio from './Pages/OurPortfolio/OurPortfolio';
import Team from './Pages/Team/Team';
import Contact from './Pages/Contact/Contact';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'portfolio',
        element:<OurPortfolio></OurPortfolio>,
      },
      {
        path: 'team',
        element: <Team></Team>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
