import axios from "axios";
import { useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa6";



const Home = () => {

    const hotels = useLoaderData();
    // console.log(hotels);

    axios.defaults.withCredentials = true;

    return (
        <div className=' grid grid-cols-1  pb-5 lg:grid-cols-3 gap-6'>
            {
                hotels.map((hotel, i) => 
                    <div key={i}>
                        <div className=" mt-5 flex justify-center">
                            <div className="card w-3/4 bg-base-100 shadow-xl card-compact px-2">
                                <figure><img className="rounded" src={hotel.photo1} alt="hotel" /></figure>
                                <div className="card-body">
                                    <h2 className="font-bold text-2xl">
                                        {hotel.hotel_name}
                                        <div className="badge badge-secondary ml-2">{hotel.star_rating}<FaStar></FaStar></div>
                                    </h2>
                                    <p>{hotel.overview}</p>
                                    <div className="card-actions justify-end">
                                        <div className="badge badge-outline">Checkin: {hotel.checkin}</div>
                                        <div className="badge badge-outline">Hotel</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Home;