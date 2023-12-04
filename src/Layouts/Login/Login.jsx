import axios from "axios";
import {  useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import  { AuthContext } from "../../UseContext/ContextProvider";
// import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {

    const { firebaseLogin } = useContext(AuthContext);



    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const [errorMessage, setErrorMessage] = useState('')
    const [success, setSuccess] = useState(false);

    const navigate = useNavigate();

    axios.defaults.withCredentials = true;
    const handleSubmit = e => {
        e.preventDefault();
        e.target.reset()

        const form = new FormData(e.currentTarget);
        console.log(form.get('email'))


        

        
        
        // sign in
        const email = form.get('email');
        const password = form.get('password');

        firebaseLogin(email, password)
            .then(userCredential => {
                console.log(userCredential.user)
                axios.post('http://localhost:5000/login', values)
                    .then(response => {
                        console.log(response)
                        setSuccess(true);
                        if (response.data.Status === "Success") {
                            navigate('/')
                        }

                    })
                    .then(error => {
                        setErrorMessage("Wrong Credentials")
                        console.log(error)
                    })
                // setSuccess(true)


                // navigate(location?.state ? location.state : '/')

            })
            .catch(error => {
                setErrorMessage(error.message);
                console.error(error)
            });


    }


    return (
        <div>

            {/* Log in form */}
            <div className="hero min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-bold text-teal-800">Login in your account</h1>
                        <hr className="border-2 mt-12  border-teal-600" />

                    </div>
                    <div className="card shrink-0 w-full max-w-sm" data-aos="zoom-out">
                        <p className="font-bold text-sm">
                            Do Not Have An Account ?<Link to={'/register'}><span className="text-orange-400"> Register</span></Link>
                        </p>

                        {/*       Form            */}
                        <form onSubmit={handleSubmit} className="card-body">

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
                                            <p className="text-red-600 font-bold text-sm">{ errorMessage}</p>
                                        )
                                    }
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary bg-gray-800">Login</button>
                            </div>

                            {
                                success && (
                                    <div className="toast toast-top toast-center">
                                        
                                        <div className="alert alert-success">
                                            <span>Login successfully.</span>
                                        </div>
                                    </div>
                                )
                            }

                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;