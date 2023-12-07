import { useContext } from "react";
import  { userContext } from "../UseContext/ContextProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';


const PrivateRoute = ({ children }) => {
    
    const { userDetails, loading,} = useContext(userContext);

    const location = useLocation();
    
    console.log('Loading: ', loading)

    if (loading) {
        return <div className="loading loading-spinner text-warning  w-1/3 mx-auto ">
                
            </div>
        
    }

    if (userDetails) {
        return children
    }

    else {
        alert("Login First")
    }


    return (
        <div>
            <Navigate state={location.pathname} to={'/login'}></Navigate>
        </div>
    );
};

export default PrivateRoute;


PrivateRoute.propTypes = {
    children: PropTypes.node
}