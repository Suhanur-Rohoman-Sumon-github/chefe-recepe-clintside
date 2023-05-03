import React from 'react';

const SingleBlog = ({blog}) => {
    const {id,img,answer,question} = blog
    return (
        <>
            <div className="card w-full shadow-lg shadow-teal-500 border border-spacing-4 border-teal-600">
                <figure><img src={img} className='w-full h-64' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-teal-500 font-bold text-4xl">{question}</h2>
                    <p className='text-white'>{answer}</p>
                   
                </div>
            </div>
        </>
    );
};

export default SingleBlog;