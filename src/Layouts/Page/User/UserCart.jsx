import axios from "axios";
import { useContext, useEffect, useState } from "react";
import CartCard from "./CartCard";
import { userContext } from "../../../UseContext/ContextProvider";

const UserCart = () => {

    const [carts, setCarts] = useState([])
    
    const { userDetails } = useContext(userContext);



    useEffect(() => {
        axios.get('http://localhost:5000/bookings')
            .then(res => {
                console.log(res.data)
                setCarts(res.data.filter(e => e.user_email === userDetails.email))
                console.log(carts)
            })
            .catch(error => console.log(error))
    }, [])




    return (
        <div>
            <h2 className="text-2xl">Your cart has: {carts.length}</h2>
            
            <div>
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

