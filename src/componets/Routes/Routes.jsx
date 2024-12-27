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
import Properties from '../Layout/Properties/properties';
import PropertiesDetails from '../Pages/PropertiesDetails/PropertiesDetails';



const routes = createBrowserRouter([
    {
        path: '/',
        // errorElement: <Error></Error>,
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
                loader: ()=> fetch('/agent.json'),
                element: <Agent/>
            },
            {
                path: '/properties',
                loader: ()=> fetch('/houses.json'),
                element: <Properties/>
            },
            {
               path: '/properties/:id',
               loader: ()=> fetch('/houses.json'),
               element: <PropertiesDetails/>
            },
            {
                path: '/profile',
                element: <Profile/>
            }
        ]
    }
])

export default routes;