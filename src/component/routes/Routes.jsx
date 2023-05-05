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
import ErrorPage from '../pages/login and sinup/Login/error';
import Profile from '../pages/profile/Profile';
import Myprofile from '../pages/profile/Myfrofile/Myprofile';

const router = createBrowserRouter([{
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
},
{
    path: 'news/:id',
    element: <PrivateRout ><Singlechefe /></PrivateRout>,
    loader: ({ params }) => fetch(`https://the-chef-resturent-server-side-su44248124.vercel.app/chef/${params.id}`)

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
            element: <Blog />,
            loader : ()=>fetch('https://the-chef-resturent-server-side-su44248124.vercel.app/blog')
        }
    ]
},
{
    path: '/sinup',
    element: <Sinup />
},
{
    path:'/profile',
    element:<Profile />
},
{
    path:'/myprofile',
    element:<Myprofile />
}
])

export default router