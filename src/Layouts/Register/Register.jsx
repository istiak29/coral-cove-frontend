import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { Link, useLocation, useNavigate } from "react-router-dom";

const Register = () => {

    const [errorMessage, setErrorMessage] = useState('');

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    })

    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();

        axios.post('http://localhost:5000/register', values)
            .then(response => {
                console.log(response)
                if (response.data.Status === "Success") {
                    navigate('/login')
                }
            })
            .then(error => {
                setErrorMessage("Inserting data error or duplicate email")
                console.log(error)
            })
    }



    return (
        <div>

            {/* Log in form */}
            <div className="hero min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-bold text-teal-800">Register account</h1>
                        <hr className="border-2 mt-12  border-teal-600" />

                    </div>
                    <div className="card shrink-0 w-full max-w-sm" data-aos="zoom-out">

                        {/* ---- toggle to register ------ */}
                        <p className="font-bold text-sm">
                            Already Have Account ?<Link to={'/login'}><span className="text-orange-400"> Login</span></Link>
                        </p>

                        {/*       Form            */}
                        <form onSubmit={handleSubmit} className="card-body">

                            {/* Name */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-bold text-teal-800">Your Name</span>
                                </label>
                                <input onChange={(e) => setValues({ ...values, name: e.target.value })} type="text" name="name" placeholder="name" className="input input-bordered rounded-md  bg-green-100" required />
                            </div>

                            {/* email */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-bold text-teal-800">Email Address</span>
                                </label>
                                <input onChange={(e) => setValues({ ...values, email: e.target.value })} type="email" name="email" placeholder="email" className="input input-bordered rounded-md  bg-gray-100" />
                            </div>

                            {/* password */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-bold text-teal-800">Password</span>
                                </label>
                                <input onChange={(e) => setValues({ ...values, password: e.target.value })} type="password" name="password" placeholder="password" className="input input-bordered rounded-md bg-gray-100" />
                                <label className="label">
                                    {
                                        errorMessage && (
                                            <p className="label-text-alt text-red-600">{errorMessage}</p>
                                        )
                                    }
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary bg-gray-800">Register</button>
                            </div>




                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;