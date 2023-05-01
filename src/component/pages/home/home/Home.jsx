import React from 'react';
import chef from '../../../../../public/iStock-544353724-e1562099629995-1024x817-removebg-preview.png'

const Home = () => {
    return (
        <div className='w-9/12 mx-auto md:flex md:justify-center md:items-center pt-52 '>
            <div className='md:w-[70%]'>
                <h1 className='text-4xl font-bold text-teal-400'>"Find the Perfect Chef for Your Kitchen - Hire Culinary Talent Today"</h1>
                <p className='text-white text-lg pt-4'>"At our chef hiring website, we understand that finding the right culinary talent for your kitchen is essential to the success of your business. That's why we've created a platform that connects you with top-quality chefs from around the world. Whether you're looking for a head chef, sous chef, pastry chef, or any other type of culinary professional, we have a diverse pool of talent to choose from. Our team of experts works with you every step of the way to ensure that you find the perfect candidate to meet your unique needs. So why wait? Start browsing our selection of culinary talent today and take your kitchen to the next level!"</p>
                <button className="btn btn-success mt-4 text-white">hire now</button>
            </div>
            <div className='md:w-[30%]'>
                <img src={chef} className='w-full h-full' alt="" />
            </div>
        </div>
    );
};

export default Home;