import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";

const Login = () => {

    const { googleSignIn } = useContext(AuthContext);
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


    return (
        <div>
            <div className="mt-40 lg:ml-[500px]">
                <p className="text-3xl ml-44 font-extrabold text-[#000]">Login With</p>
                <div onClick={handleGoogleLogin} className="flex w-[500px] h-8 gap-10 rounded-full pl-4 pb-0 bg-[#fff] text-2xl mt-14 border-solid border-spacing-4 border-[#C7C7C7]">
                    <div className="pt-1">
                        <FaGoogle></FaGoogle>
                    </div>
                    <p className="pl-20">Continue with Google</p>
                </div>
                <p className="mt-8 lg:ml-28">Do not have an account? <NavLink to='/register' ><span className="text-[#F63E7B]"><u>Create an account</u></span></NavLink> </p>
            </div>
        </div>
    );
};

export default Login;