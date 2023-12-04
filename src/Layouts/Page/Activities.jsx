import { useLoaderData } from "react-router-dom";

const Activities = () => {

    const activities = useLoaderData()

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {
                activities.map(activity => <>
                    <div>
                        <div className="card card-compact bg-base-100 shadow-xl">
                            <figure><img src="https://i.ibb.co/5kRN2Qx/activitymain.jpg" alt="vehicle" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{activity.title}</h2>
                                <p>{activity.description}</p>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline bg-teal-500">size: {activity.price}</div>
                                    
                                    <div className="badge badge-outline bg-teal-500">duration: {activity.duration}</div>
                                    
                                    <div className="badge badge-outline bg-teal-500">age: {activity.ageLimit}</div>

                                    <div className="badge badge-outline bg-teal-500">height: {activity.heightRequirement}</div>

                                    <div className="badge badge-outline bg-teal-500">weight: {activity.weightLimit}</div>

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