import React from 'react';
import Navbar from '../home/navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../home/Footer/Footer';
import bg from '../../../../public/photo-1600891964599-f61ba0e24092.jfif'
import Home from '../home/home/Home';
import WhoWeAre from '../home/home/section/who-we-are-section/WhoWeAre';

const Main = () => {
    return (
        <div >
            <section className='pb-40 ' style={{ position: "relative" }} >
                <div className='blur-lg' style={{
                    backgroundImage: `url(${bg})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: -1,
                }} />
                <div  style={{
                    position: "relative",
                    zIndex: 1,
                }}>
                    <Navbar />
                    <Home />

                </div>
            </section>
            <section className='mt-6 py-52 bg-gray-950 '>
                <WhoWeAre />
            </section>
            <section>
                <Footer />
            </section>
        </div>
    );
};

export default Main;