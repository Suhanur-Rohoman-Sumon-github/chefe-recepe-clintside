import React from 'react';
import Navbar from '../../home/navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../home/Footer/Footer';

const BlogLayout = () => {
    return (
        <div>
            <Navbar />,
            <Outlet />,
            <Footer />
        </div>
    );
};

export default BlogLayout;