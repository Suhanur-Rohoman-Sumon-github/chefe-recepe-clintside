import React, { useEffect, useState } from 'react';
import SingleChef from './singlechef/SingleChef';

const Chef = () => {
    const [chefs, setChefs] = useState([])
    const [showAll,setshowAll] = useState(false)

    useEffect(() => {
        fetch('https://the-chef-resturent-server-side-su44248124.vercel.app/chef')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(err => console.error(err))
    }, [])

    return (
        <div className='pb-20'>
            <div className='text-center py-20 w-8/12 mx-auto'>
                <h1 className=' text-4xl font-bold text-teal-500 '>Our Chefs</h1>
                <p className='text-white font-bold text-center my-10'>"At our restaurant, we pride ourselves on providing an exceptional dining experience. From the moment you step inside, you'll be greeted by our friendly staff who are dedicated to making your visit a memorable one. Our menu features a wide range of delicious dishes, all made with the freshest ingredients and prepared to perfection by our talented chefs. Whether you're looking for a romantic dinner for two or a night out with friends, we have something for everyone. Come join us and taste the difference!"</p>
            </div>
            <div className='md:grid grid-cols-3 gap-6 w-10/12 mx-auto '>
                {
                    chefs.slice(0, showAll ? 12 : 6).map(chef => <SingleChef
                        key={chef.id}
                        chef={chef}
                    ></SingleChef>)
                }
                <div className=''>
                    {!showAll && (
                        <button className='btn  btn-success mt-8 text-white' onClick={() => setshowAll(true)}>Show more</button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Chef;