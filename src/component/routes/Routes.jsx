import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/Main/Main';
import Login from '../pages/login and sinup/Login/Login';
import Sinup from '../pages/login and sinup/Sinup/Sinup';
import Singlechefe from '../pages/singlechefe/Singlechefe';
import SingleChief from '../pages/layouts/singkechef/SingleChief';
import Blog from '../pages/Blog/Blog';
import Loginlayout from '../pages/layouts/loginlayouts/Loginlayout';
import BlogLayout from '../pages/layouts/bloglayout/BlogLayout';
import PrivateRout from './PrivetRout/PrivateRout';

const router = createBrowserRouter([{
    path: '/',
    element: <Main />,
},
{
    path: 'news/:id',
    element: <Singlechefe />,
    loader: ({ params }) => fetch(`http://localhost:5000/chef/${params.id}`)

},
{
    path: 'login',
    element: <Loginlayout />,
    children: [
        {
            path: '/login',
            element: <Login />
        },

    ]
},
{
    path: 'blogs',
    element: <BlogLayout />,
    children: [
        {
            path: '/blogs',
            element: <Blog />
        }
    ]
},
{
    path: '/sinup',
    element: <Sinup />
}
])

export default router