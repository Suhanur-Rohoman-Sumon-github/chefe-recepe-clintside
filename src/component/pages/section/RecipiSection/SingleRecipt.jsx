import React from 'react';

const SingleRecipt = ({i}) => {
    const {in1,in2,in3,in4,in5} = i
    return (
        <div className=' text-teal-500'>
           
            <p>{in1}</p>
            <p>{in2}</p>
            <p>{in3}</p>
            <p>{in4}</p>
            <p>{in5}</p>
        </div>
    );
};

export default SingleRecipt;