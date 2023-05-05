import React from 'react';
import { AuthContext } from '../../../Provaider/AuthProvider';
import { useContext } from 'react';
import { updateProfile } from 'firebase/auth';

const Myprofile = () => {
    const { user, auth } = useContext(AuthContext)
    const handleSinup = (event) => {
        const form = event.target
        console.log(form)
        const name = form.name.value
        const imgUrl = form.imgUrl.value
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: imgUrl
        }).then(() => {
            from.reset()
        }).catch((error) => {
            console.error(error.message)
            const errorMessage = error.message;
            setError(errorMessage)
        });

    }
    return (

        <div className='flex items-center justify-center  bg-gray-950'>
            <div className='ml-4'>
                <img src={user?.photoURL} className='h-32 w-32 rounded-full mx-auto' alt="" />
                {/* The button to open modal */}
                <label htmlFor="my-modal" className="btn btn-warning text-white">update profile</label>

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">
                        <form onSubmit={handleSinup} className='mx-auto'>
                            <input type="text" placeholder="your name" required name='name' className="input  input-bordered input-accent w-full max-w-xs" /><br />
                            <input type="text" placeholder="your img url" required name='imgUrl' className="input  mt-6  input-bordered input-accent w-full max-w-xs" /><br />
                            <button type='submit'  className="btn btn-warning mt-4">update now</button>
                        </form>
                        <div className="modal-action">
                            <label htmlFor="my-modal" className="btn btn-warning">close</label>
                        </div>
                    </div>
                </div>
            </div >
            <div className='ml-4'>
                <h1 className='text-teal-500 font-bold text-xl'> full name</h1>
                <h1 className='text-white font-bold text-2xl'>{user?.displayName}</h1>
                <h1 className='text-teal-500 font-bold text-xl'>email</h1>
                <h1 className='text-white  text-2xl'>{user?.email}</h1>
            </div>
        </div>
    );
};

export default Myprofile;