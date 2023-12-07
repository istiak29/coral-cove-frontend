import axios from "axios";
import PropTypes from "prop-types";
import { useContext } from "react";
import { FaStar } from "react-icons/fa6";
import { userContext } from "../../UseContext/ContextProvider";


const HotelCard = ({ hotel }) => {
    
    const { hotel_name, photo_url, description, checkin, star_rating, type, price } = hotel;

    const { userDetails } = useContext(userContext);


    const handleBook = (title, book_type, price) => {
        console.log(title)

        const userEmail = userDetails.email;


        axios.post('http://localhost:5000/bookings', { title, book_type, price, userEmail })
            .then(res => {
                console.log(res)
                console.log({ book_type, price })
                if (res.data.Status === "Success") {
                    console.log("we have send your data")
                }

            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className=" mt-5 flex justify-center">
            <div className="card w-3/4 bg-base-100 shadow-xl card-compact px-2">
                <figure><img src={photo_url} alt="hotel" /></figure>
                <div className="card-body">
                    <h2 className="font-bold text-2xl">
                        {hotel_name}
                        <div className="badge badge-secondary ml-2">{star_rating}<FaStar></FaStar></div>
                    </h2>

                    <p> {description}</p>

                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Check in: {checkin}</div>
                        <div className="badge badge-outline">Hotel</div>
                    </div>

                    {/* -----------Manage booking button----------- */}
                    <div className="card-actions justify-end">
                        <button onClick={() => handleBook(hotel_name, type, price)} type="submit" className="btn form-control btn-primary join-item">Book</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelCard;

HotelCard.propTypes = {
    hotel: PropTypes.object
}