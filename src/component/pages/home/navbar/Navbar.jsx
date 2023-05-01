import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='w-11/12 mx-auto '>
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content text-2xl text-teal-400 mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li tabIndex={0}>
                                <a className="justify-between">
                                Blog 
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                
                            </li>
                        </ul>
                    </div>
                    <Link className='text-teal-400 text-2xl font-bold' to={'/'}>Hire a Chef Today</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-2xl font-bold text-teal-400">
                        <li><a>Home</a></li>
                        <li tabIndex={0}>
                            <a>
                            Blog 
                                
                            </a>
                            
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                <button className="btn btn-success ml-4 text-white">login</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;