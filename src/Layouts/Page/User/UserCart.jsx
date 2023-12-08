import axios from "axios";
import { useContext, useEffect, useState } from "react";
import CartCard from "./CartCard";
import { userContext } from "../../../UseContext/ContextProvider";

const UserCart = () => {

    const [carts, setCarts] = useState([])
    
    const { userDetails } = useContext(userContext);

    useEffect(() => {
        // Check if userDetails is truthy and userDetails.email is defined
        if (userDetails && userDetails.email) {
            axios.get('http://localhost:5000/bookings')
                .then(res => {
                    console.log('useEffect: ', res);
                    
                    setCarts(res.data.filter(e => userDetails.email === e.user_email));
                })
                .catch(error => console.log(error));
        }
    }, [userDetails]);

    console.log(carts);




    return (
        <div>
            <h2 className="text-2xl font-bolt my-5">Your cart has: {carts.length}</h2>
            
            <div>

                <div className="grid grid-cols-5 border-2 p-3 mb-4 text-2xl font-bold rounded border-purple-600">
                    <h2>SL</h2>
                    <h2>Title</h2>
                    <h2>Type</h2>
                    <h2>price</h2>
                </div>
                
                {
                    carts.map((cart, i) =>
                        <CartCard
                            key={i}
                            cart={cart}
                            index={i}
                        >
                        </CartCard>
                    )
                }
            </div>
        </div>
    );
};

export default UserCart;

