
import HotelCard from "./HotelCard";
import { useEffect, useState } from "react";
import axios from "axios";

const Hotels = () => {


    const [hotels, setHotels] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/hotels')
            .then(res => {
                console.log(res)
                setHotels(res.data)
            })
            .catch(error => console.log(error))
    }, [])

    

    return (
        <div className=' grid grid-cols-1  pb-5 lg:grid-cols-3 gap-6'>
            {
                hotels.map((hotel, i) => <HotelCard
                    key={i}
                    hotel={hotel}
                ></HotelCard>
                )}
        </div>
    );
};

export default Hotels;