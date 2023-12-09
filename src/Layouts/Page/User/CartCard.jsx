
import PropTypes from 'prop-types';
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CartCard = ({ cart, index }) => {


    const { title, book_type, price, booking_id } = cart;


    
    const navigate = useNavigate();

    // const { userDetails } = useContext(userContext);
    // console.log(userDetails.email, user_email)

    const handleDelete = (booking_id) => {

        console.log(booking_id);

            axios.delete('http://localhost:5000/bookings/:'+booking_id)
                .then(res => {
                    console.log(res) 
                    navigate('/usercart')
                })
                .catch(error => {
                    console.log(error)
                })
    }


    return (
        <div >

            <div className="grid grid-cols-5 gap-2 p-3">


                <h2>{index + 1} </h2>
                
                <h2>{title}</h2>

                <h2>{book_type}</h2>
                
                <h2>{price}</h2>

                <button onClick={() => handleDelete(booking_id)} className="btn btn-error flex gap-2 items-center bg-orange-500">
                    <MdDelete></MdDelete>
                    Delete
                </button>
            </div>

            <div className='flex'>
                {/* <h2>Total Price: { }</h2> */}
            </div>
            
        </div>
    );
};

export default CartCard;

CartCard.propTypes = {
    cart: PropTypes.object,
    index: PropTypes.number
}