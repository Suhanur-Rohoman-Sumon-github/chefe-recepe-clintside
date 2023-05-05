import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Provaider/AuthProvider';

const Navbar = () => {

    const { user,  logout } = useContext(AuthContext)

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
                            <li><NavLink className={({ isActive }) => isActive ? 'text-white' : 'nothing'} to={'/'}>Home</NavLink></li>
                            <li tabIndex={0}>
                                <NavLink className={({ isActive }) => isActive ? 'text-white' : 'nothing'} to={'/blogs'} >
                                    Blog
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <Link className='text-teal-400 text-2xl font-bold' to={'/'}>Hire a Chef Today</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-2xl font-bold text-teal-400">
                        <li><NavLink className={({ isActive }) => isActive ? 'text-white' : 'nothing'} to={'/'}>Home</NavLink></li>
                        <li tabIndex={0}>
                            <NavLink className={({ isActive }) => isActive ? 'text-white' : 'nothing'} to={'/blogs'}>
                                Blog

                            </NavLink>

                        </li>
                    </ul>

                </div>
                <div className="navbar-end">
                    {user && <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img  src={user?.photoURL} title={user?.displayName} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">   
                            <li><Link to={'/profile'}><button className="btn btn-warning text-white w-full">veiw profile</button></Link> </li>
                            {user && <Link to={'/'}><button onClick={handlelogout} className="btn btn-success w-full mt-4 text-white">logout</button></Link>}
                        </ul>
                    </div>}

                    {!user && <Link to={'/login'}><button className="btn btn-success ml-4 text-white">login </button></Link>}
                    <div className='hidden lg:flex items-center '>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;