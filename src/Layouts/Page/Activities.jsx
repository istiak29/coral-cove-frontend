import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { userContext } from "../../UseContext/ContextProvider";
// import { useLoaderData } from "react-router-dom";

const Activities = () => {

    // const activities = useLoaderData()

    const [activities, setActivities] = useState([])

    const { userDetails } = useContext(userContext);


    // get activities data from database
    useEffect(() => {
        axios.get('http://localhost:5000/activities')
            .then(res => {
                // console.log(res)
                setActivities(res.data)
            })
            .catch(error => console.log(error))
    }, [])

    const handleBook = (title, book_type, price) => {

        const userEmail = userDetails.email;


        axios.post('http://localhost:5000/bookings', { title, book_type, price, userEmail })
            .then(res => {
                // console.log(res)
                // console.log({ title, book_type, price })
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
                activities.map((activity, i) => 
                    <div key={i}>
                        <div className="card card-compact bg-base-100 shadow-xl">
                            <figure><img src={activity.photo_url} alt="vehicle" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{activity.title}</h2>
                                <p>{activity.description}</p>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline bg-teal-500">size: {activity.price}</div>
                                    
                                    <div className="badge badge-outline bg-teal-500">duration: {activity.duration}</div>
                                    
                                    <div className="badge badge-outline bg-teal-500">age: {activity.age_limit}</div>

                                    <div className="badge badge-outline bg-teal-500">height: {activity.height_limit}</div>

                                    <div className="badge badge-outline bg-teal-500">weight: {activity.weight_limit} lbs</div>

                                    <div className="badge badge-outline bg-yellow-400">capacity: {activity.capacity}</div>
                                </div>
                                <div className="card-actions justify-end">
                                    <button onClick={() => handleBook(activity.title, activity.type, activity.price)} className="btn btn-primary">Book</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Activities;