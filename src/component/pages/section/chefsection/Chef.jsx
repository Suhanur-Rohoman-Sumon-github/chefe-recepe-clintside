import React, { useEffect, useState } from 'react';
import SingleChef from './singlechef/SingleChef';

const Chef = () => {

    const [chefs,setChefs] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/chef')
        .then(res=>res.json())
        .then(data=>setChefs(data))
        .catch(err =>console.error(err))
    },[])

    return (
        <div>
            <h1>our chefs section</h1>
           <div className='md:grid grid-cols-3 gap-6 w-10/12 mx-auto'>
           {
               chefs.map(chef=><SingleChef 
               key={chef.id}
               chef={chef}
               ></SingleChef>) 
            }
           </div>
        </div>
    );
};

export default Chef;