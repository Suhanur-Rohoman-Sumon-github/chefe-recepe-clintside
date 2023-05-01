import React from 'react';
import Rating from 'react-rating';
import { FaBookmark, FaShareAlt, FaEye, FaStar, FaRegStar } from "react-icons/fa";

const SingleChef = ({ chef }) => {
    console.log(chef)
    const { chefName, yearsOfExperience, numberOfRecipes, imageUrl, likes, rating } = chef
    return (
        <>
            <div className="card w-full shadow-lg shadow-teal-500 border border-spacing-4 border-teal-600 ">
                <figure><img src={imageUrl} className='h-64 w-full' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-teal-600 font-bold text-2xl">
                        {chefName}
                    </h2>
                    <p className='font-bold text-teal-500'>year of expariance : {yearsOfExperience}</p>
                    <p className='font-bold text-teal-500 text-lg'>numbar of recipi : {numberOfRecipes}</p>
                    <div className="card-actions justify-between flex items-center">
                        <div className=" ">
                            <div>
                                <p className='flex items-center my-2 font-bold text-teal-500'>total veiw <FaEye className='mx-2' /> {likes} </p>
                                <p className='font-bold text-teal-500'>ratings : <Rating className='ml-2'
                                    placeholderRating={rating}
                                    readonly
                                    emptySymbol={<FaRegStar />}
                                    placeholderSymbol={<FaStar className='text-warning' />}
                                    fullSymbol={<FaStar />}
                                /></p>

                            </div>
                            <div>

                            </div>
                        </div>
                        <button className="btn btn-outline btn-success">vew recipis</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleChef;