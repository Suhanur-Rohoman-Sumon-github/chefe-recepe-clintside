import React, { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provaider/AuthProvider';
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import app from '../../../../firebase/firebase.config';

const auth = getAuth(app)

const Login = () => {
    const navigate = useNavigate()
    const { loginUser } = useContext(AuthContext)
    const location = useLocation()


    const from = location.state?.from?.pathname || '/';
    const googleProvider = GoogleAuthProvider
    const handleGooglesinin = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(error => console.error(error))
    }

    const handalelogin = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        loginUser(email, password)
            .then((userCredential) => {
                navigate(from, { replace: true })
                    .then(() => {

                    })
                    .catch(error => {
                        console.error(error.message)
                    })

            });
    }

    return (
        <div className=''>
            <div className='border md:w-3/12 mx-auto p-7 border-spacing-4 border-teal-500 mt-28 mb-52 shadow-2xl rounded-md shadow-teal-500'>
                <h1 className='text-3xl text-teal-500 my-4 text-center'>please login</h1>
                <form onSubmit={handalelogin} className='mx-auto'>
                    <input type="text" placeholder="Type here" required name='email' className="input  input-bordered input-accent w-full max-w-xs" /><br />
                    <input type="password" required name='password' placeholder="Type here" className="input mt-6 input-bordered input-accent w-full max-w-xs" />
                    <div className='flex items-center mt-4'>
                        <input type="checkbox" required name='confirm password' className="checkbox checkbox-success mr-4" />
                        <span className="label-text text-teal-500">accept terms and conditon</span>
                    </div>
                    <button className="btn btn-success w-full mt-4">login</button>
                    <p className='text-teal-500'>have not an account please <Link to={'/sinup'}><button className="btn btn-link text-teal-500">sinup</button></Link> </p>

                </form>
                <button onClick={handleGooglesinin} className="btn btn-outline btn-success w-full"><FaGoogle className='mr-4' /> login withe google</button>
                <button className="btn btn-outline btn-success mt-4 w-full"><FaGithub className='mr-4' /> login withe github</button>
            </div>
        </div>
    );
};

export default Login;