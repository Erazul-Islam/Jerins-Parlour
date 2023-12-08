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
import Dashboard from './Shared/Dashboard/Dashboard';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Book from './Shared/ClientDashboard/Book/Book';
import BookingList from './Shared/ClientDashboard/BookingList/BookingList';
import ClientReview from './Shared/ClientDashboard/ClientReview/ClientReview';
import OrderList from './Shared/AdminDashboard/OrderList/OrderList';
import AddService from './Shared/AdminDashboard/AddService/AddService';
import MakeAdmin from './Shared/AdminDashboard/MakeAdmin/MakeAdmin';
import Manage from './Shared/AdminDashboard/Manage/Manage';
import Admin from './Shared/Dashboard/Admin';

const queryClient = new QueryClient();

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
        element: <OurPortfolio></OurPortfolio>,
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
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'book',
        element: <Book></Book>
      },
      {
        path: 'list',
        element: <BookingList></BookingList>
      },
      {
        path: 'client',
        element: <ClientReview></ClientReview>
      }

    ]
  },
  {
    path: 'admin',
    element: <Admin></Admin>,
    children: [
      {
        path: 'add',
        element: <AddService></AddService>
      },
      {
        path: 'make',
        element: <MakeAdmin></MakeAdmin>
      },
      {
        path: 'manage',
        element: <Manage></Manage>
      },
      {
        path: 'order',
        element: <OrderList></OrderList>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
