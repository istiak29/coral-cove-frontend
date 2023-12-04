import title from '../../assets/title.png'
import Navbar from './Navbar/Navbar';
const Header = () => {
    return (
        <>
            <img className='w-full mx-auto' src={title} alt="" />
            <Navbar></Navbar>
        </>
    );
};

export default Header;