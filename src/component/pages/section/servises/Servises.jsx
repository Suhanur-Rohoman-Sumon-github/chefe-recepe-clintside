import React, { useEffect, useState } from 'react';
import Singleservises from './singleservises/Singleservises';
import Marquee from 'react-fast-marquee';
import Slider from "react-slick";

const Servises = () => {

    const [servises, setServises] = useState([])

    useEffect(() => {
        fetch('https://the-chef-resturent-server-side-su44248124.vercel.app/servises')
            .then(res => res.json())
            .then(data => setServises(data))
            .catch(err => console.error(err))
    }, [])

    

    return (
        <div className='pb-12'>
            <div className='text-center py-20 w-8/12 mx-auto'>
                <h1 className=' text-4xl font-bold text-teal-500 '>What Servise We Provide</h1>
                <p className='text-white font-bold text-center my-10'>"At our restaurant, we pride ourselves on providing an exceptional dining experience. From the moment you step inside, you'll be greeted by our friendly staff who are dedicated to making your visit a memorable one. Our menu features a wide range of delicious dishes, all made with the freshest ingredients and prepared to perfection by our talented chefs. Whether you're looking for a romantic dinner for two or a night out with friends, we have something for everyone. Come join us and taste the difference!"</p>
            </div>
                <div className='md:grid grid-cols-3 gap-6 w-10/12 mx-auto '>
                
                    {
                        servises.map(servis => <Singleservises
                            key={servis.id}
                            servis={servis}
                        ></Singleservises>)
                    }
                    
                </div>
        </div>
    );
};

export default Servises;