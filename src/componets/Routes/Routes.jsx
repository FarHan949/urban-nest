import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import Error from '../Pages/Error/Error'
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Profile from '../Pages/Profile/Profile';
import Contact from '../Pages/Contact/Contact';
import Agent from '../Pages/Agent/Agent';



const routes = createBrowserRouter([
    {
        path: '/',
        errorElement: <Error></Error>,
        element: <Root></Root>,
        children: [
            {
               path: '/',
               loader: ()=> fetch('/houses.json'),
               element: <Home/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/agent',
                element: <Agent/>
            },
            {
                path: '/profile',
                element: <Profile/>
            }
        ]
    }
])

export default routes;