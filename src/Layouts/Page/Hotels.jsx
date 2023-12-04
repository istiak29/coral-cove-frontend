import { useLoaderData } from "react-router-dom";
import HotelCard from "./HotelCard";

const Hotels = () => {
    const hotels = useLoaderData()
    return (
        <div className=' grid grid-cols-1  pb-5 lg:grid-cols-3 gap-6'>
            {
                hotels.map(hotel => <HotelCard
                    key={hotel.hotel_id}
                    hotel={hotel}
                ></HotelCard>
                )}
        </div>
    );
};

export default Hotels;