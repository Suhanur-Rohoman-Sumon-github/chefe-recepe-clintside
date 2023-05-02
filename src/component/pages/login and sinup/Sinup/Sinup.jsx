import React, { useContext } from 'react';
import Navbar from '../../home/navbar/Navbar';
import Footer from '../../home/Footer/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../Provaider/AuthProvider';

const Sinup = () => {
    const { sinUpUser, setPhotoUrl, setName, error, setError,setUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleSinup = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const imgUrl = form.imgUrl.value
        const email = form.email.value
        const password = form.password.value
        const confirmPassword = form.confirmPassword.value
        if (confirmPassword === !password) {
            return setError('vai pass mache kore na ')
        }
        sinUpUser(email, password)
            .then((userCredential) => {
                navigate('/')
                updateProfile(auth.currentUser, {
                    displayName: displayName, photoURL: photoURL
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    console.error(error.message)
                    const errorMessage = error.message;
                    setError(errorMessage)
                });

            });
        setName(name)
        setPhotoUrl(imgUrl)
    }
    return (
        <div className='bg-gray-800 '>
            <Navbar />
            <div className='border md:w-3/12 mx-auto p-7 border-spacing-4 border-teal-500 mt-28 mb-52 shadow-2xl rounded-md shadow-teal-500'>
                <h1 className='text-3xl text-teal-500 my-4 text-center'>please sin up</h1>
                <form onSubmit={handleSinup} className='mx-auto'>
                    <input type="text" placeholder="your name" required name='name' className="input  input-bordered input-accent w-full max-w-xs" /><br />
                    <input type="text" placeholder="your img url" required name='imgUrl' className="input  mt-6  input-bordered input-accent w-full max-w-xs" />
                    <input type="email" placeholder="your email @ .com" required name='email' className="input  mt-6  input-bordered input-accent w-full max-w-xs" />
                    <input type="password" placeholder="your password" required name='password' className="input mt-6 input-bordered input-accent w-full max-w-xs" />
                    <input type="password" placeholder="confirm your password" required name='confirmPassword' className="input mt-6 input-bordered input-accent w-full max-w-xs" />
                    <p className='text-red-500'>{error}</p>
                    <div className='flex items-center mt-4'>
                        <input type="checkbox" className="checkbox checkbox-success mr-4" />
                        <span className="label-text text-teal-500">accept terms and conditon</span>
                    </div>
                    <button className="btn btn-success w-full mt-4">sin up</button>
                    <p className='text-teal-500'>have an account please <Link to={'/login'}><button className="btn btn-link text-teal-500">login</button></Link> </p>
                    <button className="btn btn-outline btn-success w-full"><FaGoogle className='mr-4' /> login withe google</button>
                    <button className="btn btn-outline btn-success mt-4 w-full"><FaGithub className='mr-4' /> login withe github</button>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Sinup;