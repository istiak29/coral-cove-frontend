import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './Layouts/Page/Home/Home';
import Login from './Layouts/Login/Login';
import Logout from './Layouts/Logout/Logout';
import Register from './Layouts/Register/Register';
import Bookings from './Layouts/Page/Bookings';
import Hotels from './Layouts/Page/Hotels';
import Transportation from './Layouts/Page/Transportation';
import Activities from './Layouts/Page/Activities';
import Packages from './Layouts/Page/Packages';
import ContextProvider from './UseContext/ContextProvider';
import UserCart from './Layouts/Page/User/UserCart';
import UserDetails from './Layouts/Page/User/UserDetails';
import EditUser from './Layouts/Page/User/EditUser';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/public/hotels.json')
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/logout',
        element: <Logout></Logout>
      },
      {
        path: '/bookings',
        element: <Bookings></Bookings>
      },
      {
        path: '/hotel',
        // element: <PrivateRoute><Hotels></Hotels></PrivateRoute>
        element: <Hotels></Hotels>
      },
      {
        path: '/transportation',
        element: <Transportation></Transportation>
        
      },
      {
        path: '/activities',
        // element: <PrivateRoute><Activities></Activities></PrivateRoute>
        element: <Activities></Activities>
      },
      {
        path: '/packages',
        element: <Packages></Packages>
      },
      {
        path: '/usercart',
        element: <UserCart></UserCart>
      },
      {
        path: '/profile',
        element: <UserDetails></UserDetails>
      },
      {
        path: '/update/:id',
        element: <EditUser></EditUser>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>,
)
