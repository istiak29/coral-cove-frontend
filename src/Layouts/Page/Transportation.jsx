import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { userContext } from "../../UseContext/ContextProvider";


const Transportation = () => {

    const { userDetails } = useContext(userContext);

    const [transports, setTransports] = useState([])


    useEffect(() => {
        axios.get('http://localhost:5000/transport')
            .then(res => {
                console.log(res.data)
                setTransports(res.data)
            })
            .catch(error => console.log(error))
    }, [])

    const handleBook = (title, book_type, price) => {

        const userEmail = userDetails.email;

        axios.post('http://localhost:5000/bookings', { title, book_type, price, userEmail })
            .then(res => {
                console.log(res)
                if (res.data.Status === "Success") {
                    console.log("we have send your data")
                }

            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {
                transports.map((transport, i) =>

                    <div key={i}>
                        <div className="card card-compact bg-base-100 shadow-xl">
                            <figure><img src={transport.photo_url} alt="vehicle" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{transport.vehicle_type}</h2>
                                <p>{transport.description}</p>
                                <p>Driver: {transport.driver_name}</p>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline bg-teal-500">size: {transport.size}</div>
                                    <div className="badge badge-outline bg-yellow-400">capacity: {transport.capacity}</div>
                                </div>

                                <div className="justify-start badge badge-outline bg-fuchsia-500">
                                    <h2>{transport.type}</h2>
                                </div>

                                {/* -----------Manage booking button----------- */}
                                <div className="card-actions justify-end">
                                    <button onClick={() => handleBook(transport.vehicle_type, transport.type, transport.price)} type="submit" className="btn form-control btn-primary join-item">Book</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Transportation;