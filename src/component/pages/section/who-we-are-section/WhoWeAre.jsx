import React from 'react';
import bg from '../../../../../public/handsome-chef-jugglery-with-vegetable_329181-689.avif'
import { FaArrowRight } from 'react-icons/fa';

const WhoWeAre = () => {
    return (
        <>
            <h1 className='text-center  text-teal-500 font-extrabold  text-4xl py-10'>Who We Are</h1>
            <div className="carousel w-full ">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className='md:flex py-32  md:items-center w-9/12 mx-auto'>
                        <div style={{
                            backgroundImage: `url(${bg})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                        }} className=' bg-black rounded-full   py-24 md:w-[20%]'>
                            <h1 className='text-center text-teal-500 font-extrabold  text-4xl '>Who We Are</h1>
                        </div>
                        <div className='md:w-[60%]  ml-7'>
                            <h1 className='text-teal-500 font-extrabold  text-4xl'>Hire Chef Today</h1>
                            <p className='mt-3 text-white font-bold'>"At our restaurant, we pride ourselves on providing an exceptional dining experience. From the moment you step inside, you'll be greeted by our friendly staff who are dedicated to making your visit a memorable one. Our menu features a wide range of delicious dishes, all made with the freshest ingredients and prepared to perfection by our talented chefs. Whether you're looking for a romantic dinner for two or a night out with friends, we have something for everyone. Come join us and taste the difference!"</p>
                            <button className="btn btn-outline  btn-success mt-4 text-white">explore more <FaArrowRight className='ml-2' /></button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle   bg-teal-500">❮</a>
                        <a href="#slide2" className="btn btn-circle   bg-teal-500">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className='md:flex py-32  md:items-center w-9/12 mx-auto'>
                        <div style={{
                            backgroundImage: `url(${bg})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                        }} className=' bg-black rounded-full   py-24 md:w-[20%]'>
                            <h1 className='text-center text-teal-500 font-extrabold  text-4xl '>Who We Are</h1>
                        </div>
                        <div className='md:w-[60%]  ml-7'>
                            <h1 className='text-teal-500 font-extrabold  text-4xl'>Catering Services</h1>
                            <p className='mt-3 text-white font-bold'>We offer catering services for events of all sizes, from intimate dinner parties to large weddings and corporate events. Our catering menu features a variety of dishes that are sure to impress your guests.</p>
                            <button className="btn btn-outline  btn-success mt-4 text-white">explore more <FaArrowRight className='ml-2' /></button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle  bg-teal-500">❮</a>
                        <a href="#slide3" className="btn btn-circle  bg-teal-500">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className='md:flex py-32  md:items-center w-9/12 mx-auto'>
                        <div style={{
                            backgroundImage: `url(${bg})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                        }} className=' bg-black rounded-full   py-24 md:w-[20%]'>
                            <h1 className='text-center text-teal-500 font-extrabold  text-4xl '>Who We Are</h1>
                        </div>
                        <div className='md:w-[60%]  ml-7'>
                            <h1 className='text-teal-500 font-extrabold  text-4xl'>Specials Menu</h1>
                            <p className='mt-3 text-white font-bold'>Check out our specials menu for the latest seasonal dishes and limited-time offers. Don't miss out on these delicious deals!</p>
                            <button className="btn btn-outline  btn-success mt-4 text-white">explore more <FaArrowRight className='ml-2' /></button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle  bg-teal-500">❮</a>
                        <a href="#slide4" className="btn btn-circle  bg-teal-500">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <div className='md:flex py-32  md:items-center w-9/12 mx-auto'>
                        <div style={{
                            backgroundImage: `url(${bg})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                        }} className=' bg-black rounded-full   py-24 md:w-[20%]'>
                            <h1 className='text-center text-teal-500 font-extrabold  text-4xl '>Who We Are</h1>
                        </div>
                        <div className='md:w-[60%]  ml-7'>
                            <div>
                                <h1 className='text-teal-500 font-extrabold  text-2xl'>Hours of Operation</h1>
                                <p className='mt-3 text-white font-bold'>We are open Monday to Friday from 11am to 10pm, and on weekends from 12pm to 11pm.</p>
                            </div>
                            <div class="address">
                                <h3 className='text-teal-500 font-extrabold  text-2xl'>Address</h3>
                                <p className='mt-3 text-white font-bold'>123 Main St  New York, NY 10001</p>
                            </div>
                            <button className="btn btn-outline  btn-success mt-4 text-white">explore more <FaArrowRight className='ml-2' /></button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle  bg-teal-500">❮</a>
                        <a href="#slide1" className="btn btn-circle  bg-teal-500">❯</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhoWeAre;