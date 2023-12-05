import axios from "axios";
import { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";

const Activities = () => {

    // const activities = useLoaderData()

    const [activities, setActivities] = useState([])

    // get activities data from database
    useEffect(() => {
        axios.get('http://localhost:5000/activities')
            .then(res => {
                console.log(res)
                setActivities(res.data)
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {
                activities.map(activity => <>
                    <div>
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
                                    <button className="btn btn-primary">Book</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>)
            }
        </div>
    );
};

export default Activities;