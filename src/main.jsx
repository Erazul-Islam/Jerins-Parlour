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
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
