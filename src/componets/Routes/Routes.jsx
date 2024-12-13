import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import Error from '../Pages/Error/Error'
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';

const routes = createBrowserRouter([
    {
        path: '/',
        errorElement: <Error></Error>,
        element: <Root></Root>,
        children: [
            {
               path: '/',
               element: <Home/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            }
        ]
    }
])

export default routes;