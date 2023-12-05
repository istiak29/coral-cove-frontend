import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';

export const userContext = createContext(null);


const ContextProvider = ({ children }) => {



    const [name, setName] = useState()

    const authInfo = {
        
        name,
        setName
    }

    // In a component that renders in your app
    useEffect(() => {
        const storedUserInfo = localStorage.getItem('userInfo');
        if (storedUserInfo) {
            const userInfo = JSON.parse(storedUserInfo);
            // Set the user info in your state or context
            setName(userInfo);
        }
    }, []);



    return (
        <userContext.Provider value={authInfo}>
            {children}
        </userContext.Provider>
    );
};

export default ContextProvider;

ContextProvider.propTypes = {
    children: PropTypes.node
};