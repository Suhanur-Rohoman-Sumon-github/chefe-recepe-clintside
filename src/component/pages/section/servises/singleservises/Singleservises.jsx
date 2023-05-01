import React from 'react';

const Singleservises = ({servis}) => {
    console.log(servis)
    const {name,image,description} = servis;
    return (
        <>
            <div className="card w-full shadow-lg shadow-teal-500 border border-spacing-4 border-teal-600">
                <figure><img src={image} className='w-full h-64' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold text-teal-500  text-3xl">{name}</h2>
                    <p className='font-bold text-teal-500 text-lg'>{description}</p>
                    
                </div>
            </div>
        </>
    );
};

export default Singleservises;