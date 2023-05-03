import React from 'react';
import Navbar from '../../home/navbar/Navbar';
import Footer from '../../home/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Loginlayout = () => {
    return (
        <div className='bg-gray-950'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Loginlayout;