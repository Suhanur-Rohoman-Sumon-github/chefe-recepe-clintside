import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/Main/Main';
import Home from '../pages/home/home/Home';
import Login from '../pages/login and sinup/Login/Login';
import Sinup from '../pages/login and sinup/Sinup/Sinup';

const router = createBrowserRouter([{
    path: '/',
    element: <Main />,
    children: [
        {
            path: '/home',
            element: <Home />
        },
        {
            path:'/login',
            element:<Login />
        },
        {
            path:'/sinup',
            element:<Sinup />
        }
    ]
}])

export default router