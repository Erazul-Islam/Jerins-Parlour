import { FaGoogle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Login = () => {
    return (
        <div>
            <div className="mt-40 lg:ml-[500px]">
                <p className="text-3xl ml-44 font-extrabold text-[#000]">Login With</p>
                <div className="flex w-[500px] h-8 gap-10 rounded-full pl-4 pb-0 bg-[#fff] text-2xl mt-14 border-solid border-spacing-4 border-[#C7C7C7]">
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