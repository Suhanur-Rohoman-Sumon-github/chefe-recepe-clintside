import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
const Home = () => {
    return (
        <div className='w-9/12 mx-auto md:flex md:justify-center md:items-center py-32 text-center  '>
            <div className=''>
                <h1 className='text-5xl  font-extrabold text-teal-500'>Wellcome</h1>
                <h1 className='bg-gradient-to-r from-teal-400 to-teal-500 bg-clip-text text-transparent animate-pulse text-4xl  font-bold '>"Find the Perfect Chef for Your Kitchen - Hire Culinary Talent Today"</h1>
                <p className='text-white text-lg pt-4 gradient-to-r from-gray-200 to-teal-500 bg-clip-text text-transparent animate-pulse '>"At our chef hiring website, we understand that finding the right culinary talent for your kitchen is essential to the success of your business. That's why we've created a platform that connects you with top-quality chefs from around the world. Whether you're looking for a head chef, sous chef, pastry chef, or any other type of culinary professional, we have a diverse pool of talent to choose from. Our team of experts works with you every step of the way to ensure that you find the perfect candidate to meet your unique needs. So why wait? Start browsing our selection of culinary talent today and take your kitchen to the next level!"</p>
                <button className="btn btn-success mt-4 text-white">hire now <FaArrowRight className='ml-2' /></button>
                <button className="btn btn-outline btn-success ml-4 text-white">explore more <FaArrowRight className='ml-2' /></button>
            </div>
        </div>
    );
};

export default Home;