import React, {  useContext } from 'react';
import { AuthContext } from '../../Provaider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRout = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        <progress className="progress w-56"></progress>
    }
    if (user) {
          return children      
    }
    return <Navigate state={{from:location}} to={'/login'} replace></Navigate>
    
};

export default PrivateRout;