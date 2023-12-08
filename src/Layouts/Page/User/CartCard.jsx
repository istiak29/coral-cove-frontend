import { useContext } from "react";
import { userContext } from "../../../UseContext/ContextProvider";
import PropTypes from 'prop-types';
import { MdDelete } from "react-icons/md";

const CartCard = ({ cart, index }) => {

    const { title, book_type, price, user_email } = cart;

    const { userDetails } = useContext(userContext);
    console.log(userDetails.email, user_email)

    const handleDelete = () => {
        
    }


    return (
        <div >

            <div className="grid grid-cols-5 gap-2 p-3">


                <h2>{index + 1}</h2>
                
                <h2>{title}</h2>

                <h2>{book_type}</h2>
                
                <h2>{price}</h2>

                <h2 onClick={handleDelete} className="w-1/3 flex gap-2 items-center border p-2 rounded bg-orange-500">
                    <MdDelete></MdDelete>
                    Delete
                </h2>
            </div>


        </div>
    );
};

export default CartCard;

CartCard.propTypes = {
    cart: PropTypes.object,
    index: PropTypes.number
}