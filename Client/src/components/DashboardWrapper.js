import { useEffect, useState } from 'react';
import {  Redirect, useLocation } from "react-router-dom";
import NavBar from './NavBar';
import Footer from './Footer'



export default function DashboardWrapper({ children }) {
    console.log("inside")
    const [authenticated, setauthenticated] = useState(JSON.parse(localStorage.getItem("authenticated")));
    const location = useLocation();
    useEffect(() => {
        const loggedInUser = JSON.parse(localStorage.getItem("authenticated"));
    console.log("sg",localStorage.getItem("authenticated"))
        if (loggedInUser) {
          setauthenticated(loggedInUser);
        }
      }, []);
    
   
    console.log("authenticated11-",authenticated)
    if (!authenticated) {
        console.log("authenticated sdd-",authenticated)
        // not logged in so redirect to login page with the return url
        return <Redirect to="/login" state={{ from: location }} />
    }

    // authorized so return child components
    return (
        <>
            <NavBar/>
            {children}
            <Footer/>
        </>
        );
}