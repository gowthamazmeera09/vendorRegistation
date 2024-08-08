import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Home from './components/pages/Home';
import Addfirm from './components/pages/Addfirm';
import Addproduct from './components/pages/Addproduct';
import Allproducts from './components/pages/Allproducts';
import Userdetails from './components/pages/Userdetails';
var router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:[
      {
        path:"/Home",
        element:<Home />,
        children:[
          {
            path:"/Home/Addfirm",
            element:<Addfirm />
          },
          {
            path:"/Home/Addproduct",
            element:<Addproduct />
          },
          {
            path:"/Home/Allproducts",
            element:<Allproducts />
          },
          {
            path:"/Home/Userdetails",
            element:<Userdetails />
          }
        ]
      },
      {
        path:"/Login",
        element:<Login />
      },
      {
        path:"/Register",
        element:<Register />
      },
      {
        path:"/Addfirm",
        element:<Addfirm />
      },
      {
        path:"/Addproduct",
        element:<Addproduct />
      },
      {
        path:"/Allproducts",
        element:<Allproducts />
      },
      {
        path:"/Userdetails",
        element:<Userdetails />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
