import React, { Suspense } from 'react';
import { lazy } from 'react';
import Navbar from '../home/navbar/Navbar';
import Footer from '../home/Footer/Footer';
import bg from '../../../../public/istockphoto-1081422898-612x612.jpg'
import Home from '../home/home/Home';
const WhoWeAre = lazy(() => import('../section/who-we-are-section/WhoWeAre'))
import Chef from '../section/chefsection/Chef';
import Servises from '../section/servises/Servises';

const Main = () => {
    return (
        <div >
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${bg})` }}>
                <div className="hero-overlay bg-opacity-80">
                    <Navbar />
                    <Home />
                </div>
              
            </div>
            <section className='  bg-gray-950 '>
            <WhoWeAre />
            </section>
            <section className=' bg-gray-800 '>
                <Chef />
            </section>
            <section className='  bg-gray-950 '>
                <Servises />
            </section>
            <section>
                <Footer />
            </section>
        </div>
    );
};

export default Main;