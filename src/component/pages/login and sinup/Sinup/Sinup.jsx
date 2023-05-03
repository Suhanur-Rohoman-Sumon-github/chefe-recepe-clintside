import React, { useContext, useState } from 'react';
import Navbar from '../../home/navbar/Navbar';
import Footer from '../../home/Footer/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../Provaider/AuthProvider';
import { signInWithPopup,getAuth, GoogleAuthProvider, GithubAuthProvider, updateProfile } from 'firebase/auth';
import app from '../../../../firebase/firebase.config';

const auth = getAuth(app)

const Sinup = () => {
    const { sinUpUser, setPhotoUrl, setName, error, setError, setUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };

      const toggleShowPassword = () => {
        setShowPassword(!showPassword);
      };
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
            .then((result) => {
                navigate('/')
                // This gives you a GitHub Access Token. You can use it to access the GitHub API.
                const credential = GithubAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                console.log(credential)

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
    return (
        <div className='bg-gray-950 '>
            <Navbar />
            <div className='border md:w-3/12 mx-auto p-7 border-spacing-4 border-teal-500 mt-28 mb-52 shadow-2xl rounded-md shadow-teal-500'>
                <h1 className='text-3xl text-teal-500 my-4 text-center'>please sin up</h1>
                <form onSubmit={handleSinup} className='mx-auto'>
                    <input type="text" placeholder="your name" required name='name' className="input  input-bordered input-accent w-full max-w-xs" /><br />
                    <input type="text" placeholder="your img url" required name='imgUrl' className="input  mt-6  input-bordered input-accent w-full max-w-xs" />
                    <input type="email" placeholder="your email @ .com" required name='email' className="input  mt-6  input-bordered input-accent w-full max-w-xs" />
                    <input type={showPassword ? 'text' : 'password'} onChange={handlePasswordChange} placeholder="your password" required name='password' className="input mt-6 input-bordered input-accent w-full max-w-xs" />
                    <input type={showPassword ? 'text' : 'password'} onChange={handlePasswordChange} placeholder="confirm your password" required name='confirmPassword' className="input mt-6 input-bordered input-accent w-full max-w-xs" />
                    <p className='text-red-500'>{error}</p>
                    <div className='flex items-center mt-4'>
                        <input type="checkbox" onClick={toggleShowPassword} className="checkbox checkbox-success mr-4" />
                        <span className="label-text text-teal-500">show password</span>
                    </div>
                    <div className='flex items-center mt-4'>
                        <input type="checkbox" required className="checkbox checkbox-success mr-4" />
                        <span className="label-text text-teal-500">accept terms and conditon</span>
                    </div>
                    <button className="btn btn-success w-full mt-4">sin up</button>
                    <p className='text-teal-500'>have an account please <Link to={'/login'}><button className="btn btn-link text-teal-500">login</button></Link> </p>

                </form>
                <button onClick={handleGooglesinin} className="btn btn-outline btn-success w-full text-white"><FaGoogle className='mr-4' /> continue withe google</button>
                <button onClick={handleGithubLogin} className="btn btn-outline btn-success mt-4 w-full text-white"><FaGithub className='mr-4' /> constinue withe github</button>
            </div>
            <Footer />
        </div>
    );
};

export default Sinup;