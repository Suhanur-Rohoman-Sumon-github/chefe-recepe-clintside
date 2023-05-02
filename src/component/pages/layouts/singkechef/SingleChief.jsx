import React from 'react';
import Navbar from '../../home/navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../home/Footer/Footer';

const SingleChief = () => {
    return (
        <div className='bg-gray-800'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default SingleChief;