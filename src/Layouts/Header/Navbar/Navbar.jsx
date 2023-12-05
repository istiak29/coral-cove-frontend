import moment from "moment/moment";
// import { FaUserAlt } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
// import {  useContext, useState } from "react";
// import axios from "axios";
import { useContext } from "react";
import { userContext } from "../../../UseContext/ContextProvider";
import { LuHotel } from "react-icons/lu";


const Navbar = () => {

    const navigate = useNavigate()

    const {  name, setName } = useContext(userContext);

    // console.log("from nav:", user)

    const navLinks = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/bookings'}>Bookings</NavLink></li>
        <li><NavLink to={'/pastEvents'}>Past Events</NavLink></li>
    </>

    // const [auth, setAuth] = useState(false);
    // const [name, setName] = useState('');

    // console.log(user.displayName)

    console.log

    const handleLogout = () => {
        
        // After user logs out
        localStorage.removeItem('userInfo');

        setName(() => {
            // Set user info to null or an empty object, depending on your state structure
            return null; // or return {}
        });

        navigate('/')
        


                // axios.get('http://localhost:5000/logout')
                //     .then((res) => {
                //         if (res.data.Status === "Success") {
                //             // location.reload(true)
                //         } else {
                //             alert("ERROR occurred")
                //         }

                //     })
                //     .catch(err => {
                //         console.log(err)
                //     })


            
    }



    return (
        <div className="my-5">
            <div className="navbar bg-base-200">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <p className="font-bold text-teal-700">{moment().format('MMMM Do YYYY, h:mm a')}</p>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        name ?
                            <div className="flex gap-3">
                                <div className=" p-2 font-bold border-2 border-fuchsia-600 rounded-md">
                                    <Link to={'/usercart'}><p className="flex items-center gap-3"><LuHotel></LuHotel>Your Bookings</p></Link>
                                </div>
                                <div className="p-2 font-bold border-2 border-emerald-800 rounded-md">{name}</div>

                                <button onClick={handleLogout} className="btn btn-warning">Logout</button>
                            </div>
                            :
                            <div>
                                <button className="btn"><Link to={'/login'}>Log in / Register</Link></button>
                            </div>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;