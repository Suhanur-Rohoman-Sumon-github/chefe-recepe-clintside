import React, { Children, useContext } from 'react';
import { AuthContext } from '../../Provaider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRout = ({Children}) => {
    const {user} = useContext(AuthContext)
    const location = useLocation()
    
    if (user) {
          return Children      
    }
    return <Navigate state={{from:location}} to={'/login'} replace></Navigate>
    
};

export default PrivateRout;