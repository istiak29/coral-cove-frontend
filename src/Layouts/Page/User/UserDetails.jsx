import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { userContext } from "../../../UseContext/ContextProvider";
import { Link } from "react-router-dom";

const UserDetails = () => {

    const [users, setUsers] = useState([]);

    const { userDetails } = useContext(userContext);



    useEffect(() => {
        // Check if userDetails is truthy and userDetails.email is defined
        if (userDetails && userDetails.email) {
            axios.get('http://localhost:5000/userlogin')
                .then(res => {
                    // console.log('useEffect: ', res);

                    setUsers(res.data.filter(e => userDetails.email === e.email));
                })
                .catch(error => console.log(error));
        }
    }, [userDetails]);



    return (
        <div>
            {
                users.map((user) => 
                    <div key={user.id} className="grid grid-cols-4 gap-20">
                        <div>
                            <img className="w-full" src='/src/assets/user.png' alt="" />
                        </div>
                        <div className="col-span-2 p-5 border-2 rounded-md border-cyan-600">
                            <div>
                                <div className="flex gap-10 items-center">
                                    <h2 className="font-bold text-2xl">User Name: <p className="w-full text-lg p-3 border-2 rounded-md md:mt-2"> {user.name}</p></h2>
                                </div>


                            </div>
                            <div>
                                <div className="mt-8 flex gap-10 items-center">
                                    <h2 className="font-bold text-2xl">User Email: <p className="w-full text-lg p-3 border-2 rounded-md md:mt-3 sm:mt-2">{user.email}</p></h2>

                                </div>

                                
                                

                            </div>

                            {/* ----- update button------- */}
                            <div className="mt-20">
                                
                                
                                {/* ---Edit Button---- */}
                                <button className="ml-5 btn btn-active btn-ghost"><Link to={`/update/${user.id}`}>Edit</Link></button>
                            </div>
        
                        </div>

                    </div>)
            }
        </div>
    );
};

export default UserDetails;


