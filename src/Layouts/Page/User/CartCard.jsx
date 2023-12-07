import { useContext } from "react";
import { userContext } from "../../../UseContext/ContextProvider";
import PropTypes from 'prop-types';


const CartCard = ({ cart, index}) => {
    
    const {title, book_type, price, user_email } = cart;

    const { userDetails } = useContext(userContext);
    console.log(userDetails.email, user_email)


    return (
        <div>
            {
                userDetails.email === user_email && (
                    <div>
                        <h2>it is num: {index + 1} | {title} | {book_type} | {price} | email: {user_email} </h2>
                        <hr />
                    </div>
                )
            }
            
        </div>
    );
};

export default CartCard;

CartCard.propTypes = {
    cart: PropTypes.object,
    index: PropTypes.number
}