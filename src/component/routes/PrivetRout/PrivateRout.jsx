import React, { Children, useContext } from 'react';
import { AuthContext } from '../../Provaider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRout = ({Children}) => {
    const {user} = useContext(AuthContext)
    if (user) {
          return Children      
    }
    return <Navigate to={'/login'}></Navigate>
    
};

export default PrivateRout;