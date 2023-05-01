import React from 'react';

import bg from '../../../../../../../public/handsome-chef-jugglery-with-vegetable_329181-689.avif'

const WhoWeAre = () => {
    return (
        <div className='md:flex  md:items-center w-9/12 mx-auto'>
            <div style={{
                backgroundImage: `url(${bg})`,
                backgroundPosition: "center",
                backgroundSize: "cover",   
            }} className=' bg-black rounded-full   py-24 w-[20%]'>
                <h1 className='text-center text-teal-500 font-extrabold  text-4xl '>Who We Are</h1>
            </div>
            <div className='w-[60%]  ml-7'>
                <h1 className='text-teal-500 font-extrabold  text-4xl'>Hire Chef Today</h1>
                <p className='mt-3 text-white font-bold'>"At our restaurant, we pride ourselves on providing an exceptional dining experience. From the moment you step inside, you'll be greeted by our friendly staff who are dedicated to making your visit a memorable one. Our menu features a wide range of delicious dishes, all made with the freshest ingredients and prepared to perfection by our talented chefs. Whether you're looking for a romantic dinner for two or a night out with friends, we have something for everyone. Come join us and taste the difference!"</p>
                <button className="btn btn-outline text-white btn-success mt-4">explore more</button>
            </div>
        </div>
    );
};

export default WhoWeAre;