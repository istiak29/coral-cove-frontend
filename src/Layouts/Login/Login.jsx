import axios from "axios";
import {  useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { userContext } from "../../UseContext/ContextProvider";
// import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {

    const { setUserDetails, setLoading, loading } = useContext(userContext);



    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const location = useLocation()
    const navigate = useNavigate();

    axios.defaults.withCredentials = true;

    const handleSubmit = e => {
        e.preventDefault();
        e.target.reset()

        const form = new FormData(e.currentTarget);

        // sign in
        const email = form.get('email');
        // const password = form.get('password');

        console.log(email)

        
                axios.post('http://localhost:5000/login', values)
                    .then(response => {
                        console.log(response)
                        
                        if (response.data.Status === "Success") {
                            

                            const loginName = response.data.name;
                            const loginEmail = response.data.email;

                            const details = {name:loginName, email:loginEmail}

                            console.log(details)

                            // const loginUserInfo = { name: loginName }

                            setLoading(false);
                            setUserDetails(details);

                            console.log('login:', loading)

                            // local storage
                            localStorage.setItem('userInfo', JSON.stringify(details));


                            // set User name from

                            navigate(location?.state ? location.state : '/')
                        }

                    })
                    .then(error => {
                        console.log(error)
                    })

                // navigate(location?.state ? location.state : '/')



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
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary bg-gray-800">Login</button>
                            </div>

                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;