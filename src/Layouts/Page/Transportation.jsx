import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Transportation = () => {

    // const transports = useLoaderData();

    const [transports, setTransports] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/transport')
            .then(res => {
                console.log(res)
                setTransports(res.data)
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {
                transports.map((transport, i) => 
                
                    <div key={i}>
                        <div className="card card-compact bg-base-100 shadow-xl">
                            <figure><img src={transport.photo_url} alt="vehicle" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{transport.vehicle_title}</h2>
                                <p>{transport.description}</p>
                                <p>Driver: { transport.driver_name}</p>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline bg-teal-500">size: {transport.size}</div>
                                    <div className="badge badge-outline bg-yellow-400">capacity: {transport.capacity}</div>
                                </div>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Book</button>
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