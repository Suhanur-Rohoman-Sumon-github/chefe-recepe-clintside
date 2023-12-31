import React, { useContext, useState } from 'react';
import { FaArrowRight, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provaider/AuthProvider';
import { GoogleAuthProvider, signInWithPopup, getAuth, GithubAuthProvider } from 'firebase/auth';
import app from '../../../../firebase/firebase.config';

const auth = getAuth(app)

const Login = () => {
    const navigate = useNavigate()
    const { loginUser } = useContext(AuthContext)
    const location = useLocation()
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState('')

    const from = location.state?.from?.pathname || '/';

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };


    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const handleGooglesinin = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                navigate('/')
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

    const handleGithubLogin = () => {
        signInWithPopup(auth, githubProvider)
        navigate('/')
            .then((result) => {

                // This gives you a GitHub Access Token. You can use it to access the GitHub API.
                const credential = GithubAuthProvider.credentialFromResult(result);


                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GithubAuthProvider.credentialFromError(error);
                // ...
            });
    }



    const handalelogin = (event) => {

        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        loginUser(email, password)
            .then((userCredential) => {
                navigate(from, { replace: true })
                setErrors('')
            })
            .catch(error => {
                console.error(error.message)
                setErrors(error.message)
            })
    }

    return (
        <div className=''>
            <div className='border md:w-3/12 mx-auto p-7 border-spacing-4 border-teal-500 mt-28 mb-52 shadow-2xl rounded-md shadow-teal-500'>
                <h1 className='text-3xl text-teal-500 my-4 text-center'>please login</h1>
                <form onSubmit={handalelogin} className='mx-auto'>
                    <input type="text" placeholder="Type here" required name='email' className="input  input-bordered input-accent w-full max-w-xs" /><br />
                    <input type={showPassword ? 'text' : 'password'} onChange={handlePasswordChange} required name='password' placeholder="Type here" className="input mt-6 input-bordered input-accent w-full max-w-xs" />
                    {errors && <p className='text-red-500 '>{errors}</p>}
                    <div className='flex items-center mt-4'>
                        <input onClick={toggleShowPassword} type="checkbox" name='confirm password' className="checkbox checkbox-success mr-4" />
                        <p className="label-text text-teal-500"><span >show password</span></p>
                    </div>
                    <button className="btn btn-success w-full mt-4 text-white">login <FaArrowRight className='ml-2' /></button>
                    <p className='text-teal-500'>have not an account please  <Link to={'/sinup'}><button className="btn btn-link text-white">sinup</button></Link> </p>

                </form>
                <button onClick={handleGooglesinin} className="btn btn-outline btn-success w-full"><FaGoogle className='mr-4' /> login withe google <FaArrowRight className='ml-2' /></button>
                <button onClick={handleGithubLogin} className="btn btn-outline btn-success mt-4 w-full"><FaGithub className='mr-4' /> login withe github <FaArrowRight className='ml-2' /></button>
            </div>
        </div>
    );
};

export default Login;