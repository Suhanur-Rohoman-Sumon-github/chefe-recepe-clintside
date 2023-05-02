import React from 'react';
import SingleRecipt from './SingleRecipt';
import Rating from 'react-rating';
import { FaRegStar, FaStar,FaHeart,FaBookmark,FaThumbsUp } from 'react-icons/fa';

const Recipi = ({ work }) => {
    const { image, chefName, ingrediant, howcook, rating, description, name, imageUrl, likes } = work
    console.log(work)
    return (
        <>
            <div className="card w-full shadow-lg  shadow-teal-500 border border-spacing-4 border-teal-600">
                <div className='flex items-center justify-between p-4'>
                    <div className='flex items-center '>
                        <img src={imageUrl} className='w-8 h-8 rounded-full' alt="" />
                        <h5 className='text-teal-500 ml-4 text-2xl'>{chefName}</h5>
                    </div>
                    <div>
                        <FaBookmark className='text-teal-500'/>
                    </div>
                </div>
                <figure><img src={image} className='w-full h-64 p-4 rounded-lg' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold text-teal-500  text-3xl">{name}</h2>
                    <p>ingradiants</p>
                    <div className=' text-teal-500  '>
                        <p className='pb-4 font-bold text-2xl'>Ingradiant : </p>
                        {
                            ingrediant.map((i, index) => <SingleRecipt
                                key={index}
                                i={i}
                            ></SingleRecipt>)
                        }
                    </div>
                    <p className='pt-4 font-bold text-2xl text-teal-500'>How cook : </p>
                    <p className='text-teal-500 '>{howcook}</p>
                    <div className="card-actions flex justify-between items-center">
                       <div>
                       <p className='font-bold text-teal-500'>
                            <Rating className='ml-2'
                                placeholderRating={rating}
                                readonly
                                emptySymbol={<FaRegStar />}
                                placeholderSymbol={<FaStar className='text-warning' />}
                                fullSymbol={<FaStar />}
                            />
                        </p>
                       </div>
                       <div className='flex items-center'>
                        <FaHeart className='font-bold text-white' />
                        <p className='flex items-center text-teal-500 ml-4'><FaThumbsUp className='mr-1' />{likes}</p>
                       </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Recipi;