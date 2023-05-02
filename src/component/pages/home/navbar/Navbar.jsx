import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provaider/AuthProvider';

const Navbar = () => {

    const { displayName, user, photoURL, logout } = useContext(AuthContext)

    const handlelogout = () => {
        logout()
            .then()
            .catch(error => console.error(error))

    }

    return (
        <div className='w-11/12 mx-auto '>
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content text-2xl text-teal-400 mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to={'/'}>Home</Link></li>
                            <li tabIndex={0}>
                                <Link to={'/blogs'} className="justify-between">
                                    Blog
                                </Link>

                            </li>
                            {user && <h1 className='text-4xl text-teal-500'>{displayName}</h1>
                            }
                            {
                                user && <img src={photoURL} className='h-7 w-7 rounded-full ml-4' alt="" />
                            }
                            {user && <Link to={'/sinup'}><button onClick={handlelogout} className="btn btn-success ml-4 text-white">logout</button></Link>}
                        </ul>
                    </div>
                    <Link className='text-teal-400 text-2xl font-bold' to={'/'}>Hire a Chef Today</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-2xl font-bold text-teal-400">
                        <li><Link to={'/'}>Home</Link></li>
                        <li tabIndex={0}>
                            <Link to={'/blogs'}>
                                Blog

                            </Link>

                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {!user && <Link to={'/login'}><button className="btn btn-success ml-4 text-white">login</button></Link>}
                    {!user && <Link to={'/sinup'}><button className="btn btn-success ml-4 text-white">sinup</button></Link>}
                    <div className='hidden lg:flex items-center '>
                        {user && <span className='text-4xl  text-teal-500'>{displayName}</span>
                        }
                        {
                            user && <img src={photoURL} className='h-7 w-7 rounded-full ml-4' alt="" />
                        }
                        {user && <Link to={'/sinup'}><button onClick={handlelogout} className="btn btn-success ml-4 text-white">logout</button></Link>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;