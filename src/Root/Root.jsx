import { Outlet } from "react-router-dom";
import Header from "../Layouts/Header/Header";
import Footer from "../Layouts/Footer/Footer";

const Root = () => {
    return (
        <>
            <div className=" mx-10 mt-3"> 
                <Header></Header>    
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Root;