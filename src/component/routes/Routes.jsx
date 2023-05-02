import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/Main/Main';
import Home from '../pages/home/home/Home';
import Login from '../pages/login and sinup/Login/Login';
import Sinup from '../pages/login and sinup/Sinup/Sinup';
import Singlechefe from '../pages/singlechefe/Singlechefe';
import SingleChief from '../pages/layouts/singkechef/SingleChief';
import Blog from '../pages/Blog/Blog';

const router = createBrowserRouter([{
    path: '/',
    element: <Main />,
    children: [
        {
            path: '/home',
            element: <Home />
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/sinup',
            element: <Sinup />
        },
        {
            path: '/blog',
            element:<Blog />

        }
    ],

},
{
    path: 'news',
    element: <SingleChief />,
    children: [{
        path: ':id',
        element: <Singlechefe />,
        loader: ({ params }) => fetch(`http://localhost:5000/chef/${params.id}`)
    }]
}



])

export default router