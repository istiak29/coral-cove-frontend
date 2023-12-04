import { Link } from "react-router-dom";

const Bookings = () => {
    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                {/* Hotels */}
                <div className="card w-96 bg-base-100 shadow-xl mt-5 ">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/R3sQgFV/hotelmain.jpg" alt="hotel" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Hotels</h2>
                        <p>choose your Desire Hotel</p>
                        <div className="card-actions">
                            <button className="btn btn-primary"><Link to={'/hotel'}>See Details</Link></button>
                        </div>
                    </div>
                </div>

                {/* Transportation */}
                <div className="card w-96 bg-base-100 shadow-xl mt-5">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/nmSBL24/transportmain.jpg" alt="transport"className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Transports</h2>
                        <p>choose your comfortable Vehicle</p>
                        <div className="card-actions">
                            <button className="btn btn-primary"><Link to={'/transportation'}>See Details</Link></button>
                        </div>
                    </div>
                </div>

                {/* activities */}
                <div className="card w-96 bg-base-100 shadow-xl mt-5">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/5kRN2Qx/activitymain.jpg" alt="activity" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Activities</h2>
                        <p>Make a challenge</p>
                        <div className="card-actions">
                            <button className="btn btn-primary"><Link to={'/activities'}>See Details</Link></button>
                        </div>
                    </div>
                </div>

                {/* packages */}
                <div className="card w-96 bg-base-100 shadow-xl mt-5">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/gzB4R5g/packagemain.jpg" alt="package" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Packages</h2>
                        <p>We can make easy Deals</p>
                        <div className="card-actions">
                            <button className="btn btn-primary"><Link to={'/packages'}>See Details</Link></button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Bookings;