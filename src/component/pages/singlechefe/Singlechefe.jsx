import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Recipi from '../section/RecipiSection/Recipi';
import Navbar from '../home/navbar/Navbar';
import Footer from '../home/Footer/Footer';


const Singlechefe = () => {

    const data = useLoaderData()
    const {chefName,imageUrl,description,works} = data

    return (
        <div className='bg-gray-800'>
            <Navbar />
           <section className='md:flex w-10/12 mx-auto md:justify-center md:items-center py-28'>
                <div className='w-[70%]'>
                <h1 className=' text-teal-500 text-4xl'>{chefName}</h1>
                <p className='text-white text-2xl mt-4'>{description}</p>
                <button className="btn btn-outline btn-success mt-4">constact </button>
                </div>
                <div className='w-[30%] ml-4'>
                    <img src={imageUrl} className='w-full h-64' alt="" />
                </div>
           </section>
           <section className='my-36'>
            <h1 className='text-4xl text-center my-36 font-bold text-teal-500'>Top 3 Recipi</h1>
             <div className='md:grid md:grid-cols-3 gap-8 w-9/12 mx-auto'>
             {
                works.map(work =><Recipi 
                key={work.id}
                work={work}
                ></Recipi>)
              }
             </div>
           </section>
           <Footer />
        </div>
    );
};

export default Singlechefe;