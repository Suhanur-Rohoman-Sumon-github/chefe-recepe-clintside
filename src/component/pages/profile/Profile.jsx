import React from 'react';
import Navbar from '../home/navbar/Navbar';
import Footer from '../home/Footer/Footer';
import { AuthContext } from '../../Provaider/AuthProvider';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Myprofile from './Myfrofile/Myprofile';

const Profile = () => {
    const { user, sinUpUser } = useContext(AuthContext)
   
    return (
        <div className='bg-gray-950'>
            <Navbar />
            <div className='w-9/12 mx-auto md:flex mt-16 mb-52'>
                <div className='text-center border border-spacing-4 border-teal-500 bg-gray-700 p-7'>
                    <img src={user?.photoURL} className='h-20 w-20 rounded-full mx-auto' />
                    <h1 className='text-white font-bold text-2xl'>{user?.displayName}</h1>
                    <ul className="menu  px-1 text-2xl font-bold text-teal-400 ">
                        <li><NavLink className={({ isActive }) => isActive ? 'text-white' : 'nothing'} to={'/profile'}>myprofile</NavLink></li> <br />
                    </ul>
                </div>
                <div className='border border-spacing-4 border-teal-500 ml-9 py-20 bg-gray-700 px-20'>
                    <Myprofile />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Profile;