import React from 'react';
import { Navigate, Outlet, useLocation} from 'react-router-dom';

//Redirects user to login page if not logged in

const ProtectedRoute = (props) => {
    const auth = props.login; 
    //Get current location from this hook
    let location = useLocation();
        
       if(auth !== undefined)
       {
           //Outlet searches for an element with the same path and returns the element
           return auth ? <Outlet /> : <Navigate to={`/login`} state={{from:location}} />;
       }
}

export default ProtectedRoute;