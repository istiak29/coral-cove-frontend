import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { userContext } from "../../../UseContext/ContextProvider";

const EditUser = () => {

    const {  setUserDetails } = useContext(userContext);


    const { id } = useParams();

    const [names, setNames] = useState('');
    const [emails, setEmails] = useState('')

    const navigate = useNavigate()
    

    useEffect(() => {
        axios.get('http://localhost:5000/edit/' + id)
            .then(res => {
                console.log(res)
                setNames(res.data[0].name)
                setEmails(res.data[0].email)
            })
            .catch(error => {
                console.log(error)
            })
    }, [id])

    const handleUpdate = (e) => {
        e.preventDefault()

        axios.put('http://localhost:5000/update/' + id, { names, emails })
            .then(res => {
                console.log(res)
                setUserDetails({name: names, email: emails})
                navigate('/profile')
            })
            .catch(error => {
            console.log(error)
        })
    }

    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/TgsG3sX/whitebg.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-zinc-200">Update Your Info!</h1>
                        <form onSubmit={handleUpdate}>
                            <div className="mb-5">
                                {/* ---Edit area */}
                                <div className="">
                                    <h2>Your Name: {names}</h2>
                                    <input type="text" name="name" placeholder="Type here" className="mt-2 input input-bordered input-success w-full max-w-xs" value={names} onChange={(e) => setNames(e.target.value)} />
                                </div>

                                {/* ---Edit area */}
                                <div className="mt-5">
                                    <h2>Your Email: {emails}</h2>
                                    <input type="email" name="email" placeholder="Type here" className="mt-2 input input-bordered input-success w-full max-w-xs" value={emails} onChange={(e) => setEmails(e.target.value)} />
                                </div>

                                <div>
                                    <button type="submit" className="btn btn-success mt-5 text-white">Save Change</button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditUser;