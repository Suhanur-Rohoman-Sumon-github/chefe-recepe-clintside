import React from 'react';

const SingleChef = ({ chef }) => {
    console.log(chef)
    const {chefName,yearsOfExperience,numberOfRecipes,imageUrl,likes,rating} = chef
    return (
        <>
            <div className="card w-full shadow-lg shadow-teal-500 border border-spacing-4 border-teal-600 ">
                <figure><img src={imageUrl} className='h-64 w-full' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-teal-600 font-bold text-2xl">
                        {chefName}
                    </h2>
                    <p className='text-white text-lg'>year of expariance : {yearsOfExperience}</p>
                    <p className='text-white text-lg'>numbar of recipi : {numberOfRecipes}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleChef;