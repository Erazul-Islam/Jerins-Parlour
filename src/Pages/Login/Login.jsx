import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";

const Login = () => {

    const { googleSignIn, signInUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        console.log('done')
        googleSignIn()
            .then(res => {
                console.log(res.user)
                const userInfo = {
                    email: res.user?.email,
                    name: res.user?.displayName
                }
                axios.post('http://localhost:5000/users', userInfo)
                    .then(res => {
                        console.log(res.data)
                        navigate('/')
                    })
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value
        console.log(email, password)

        signInUser(email, password)
            .then(res => {
                console.log(res.user)
                e.target.reset()
                navigate('/')
            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <div>
            <div className="lg:mt-40 mt-10 ml-28 lg:ml-[500px]">
                <form onSubmit={handleLogin}>
                    <div className="form-control lg:ml-16">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input w-56 lg:w-96 rounded-lg input-bordered" required />
                    </div>
                    <div className="form-control lg:ml-16 ">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input w-56 lg:w-96 rounded-lg input-bordered" required />
                    </div>
                    <div className="form-control lg:ml-16 gap-4 mt-6">
                        <button className="btn hover:bg-pink-400 w-56 lg:w-96 rounded-lg bg-[#F63E7B] text-white">Login</button>
                    </div>
                </form>
                <p className="text-3xl mt-4 lg:ml-44 font-extrabold text-[#000]">Login With</p>
                <div onClick={handleGoogleLogin} className="flex w-[250px] lg:w-[500px] h-8 gap-1 lg:gap-10 rounded-full pl-4 pb-0 bg-[#fff] lg:text-2xl text-xl mt-6 lg:mt-14 border-solid border-spacing-4 border-[#C7C7C7]">
                    <div className="pt-1">
                        <FaGoogle></FaGoogle>
                    </div>
                    <p className="lg:pl-20">Continue with Google</p>
                </div>
                <p className="mt-8 lg:ml-28">Do not have an account? <NavLink to='/register' ><span className="text-[#F63E7B]"><u>Create an account</u></span></NavLink> </p>
            </div>
        </div>
    );
};

export default Login;