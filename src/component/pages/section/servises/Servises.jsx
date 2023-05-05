import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


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
            <Swiper
             spaceBetween={30}
             centeredSlides={true}
             autoplay={{
               delay: 2500,
               disableOnInteraction: false,
             }}
             pagination={{
               clickable: true,
             }}
             navigation={true}
             modules={[Autoplay, Pagination, Navigation]}
             className="mySwiper"
            >
                {
                    servises.map(servis => <SwiperSlide key={servis.id}>
                        <div className="card md:w-7/12 h-full mx-auto shadow-lg shadow-teal-500 border border-spacing-4 border-teal-600">
                            <figure><img src={servis.image} className='w-full p-4 h-64' alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title  text-center font-bold text-teal-500  text-3xl">{servis.name}</h2>
                                <p className='font-bold  text-lg text-white'>{servis.description}</p>
                                <button className="btn btn-outline btn-success">contact us <FaArrowRight className='ml-2' /></button>
                            </div>
                        </div>
                    </SwiperSlide>

                    )
                }
            </Swiper >
        </div >
    );
};

export default Servises;