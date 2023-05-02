import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Recipi from '../section/RecipiSection/Recipi';

const Singlechefe = () => {

    const data = useLoaderData()
    const {chefName,imageUrl,description,works} = data

    return (
        <div className=''>
           <section className='flex justify-center items-center py-28'>
                <div >
                <h1 className=' text-teal-500 text-4xl'>{chefName}</h1>
                <p className='text-white text-2xl mt-4'>{description}</p>
                <button className="btn btn-outline btn-success mt-4">vew details </button>
                </div>
                <div>
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
        </div>
    );
};

export default Singlechefe;