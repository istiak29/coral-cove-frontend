import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa6";

const HotelCard = ({ hotel }) => {
    
    const { star_rating, hotel_name, photo1, overview } = hotel;

    return (
        <div className=" mt-5 flex justify-center">
            <div className="card w-3/4 bg-base-100 shadow-xl card-compact px-2">
                <figure><img src={ photo1} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="font-bold text-2xl">
                        {hotel_name}
                        <div className="badge badge-secondary ml-2">{star_rating}<FaStar></FaStar></div>
                    </h2>
                    <p>{overview}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
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