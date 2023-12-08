import { FaFacebook, FaGoogle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Register = () => {
    return (
        <div>
            <div className="rounded-lg lg:ml-[500px] border-sky-800">
                <p className="text-[#000] text-2xl font-bold">Create an Account</p>
                <div className="w-[450px] mt-11">
                    <input placeholder="First Name" className="w-[450px] bg-none" type="text" />
                    <div className="h-[1px] mt-2 bg-[#C5C5C5]"></div>
                </div>
                <div className="w-[450px] mt-11">
                    <input placeholder="Last Name" className="w-[450px] bg-none" type="text" />
                    <div className="h-[1px] mt-2 bg-[#C5C5C5]"></div>
                </div>
                <div className="w-[450px] mt-11">
                    <input placeholder="User Name or email" className="w-[450px] bg-none" type="text" />
                    <div className="h-[1px] mt-2 bg-[#C5C5C5]"></div>
                </div>
                <div className="w-[450px] mt-11">
                    <input placeholder="Password" className="w-[450px] bg-none" type="text" />
                    <div className="h-[1px] mt-2 bg-[#C5C5C5]"></div>
                </div>
                <div className="w-[450px] mt-11">
                    <input placeholder="Confirm Password" className="w-[450px] bg-none" type="text" />
                    <div className="h-[1px] mt-2 bg-[#C5C5C5]"></div>
                </div>
                <div>
                    <button className="btn mt-11 hover:bg-pink-400 bg-[#F63E7B] w-[450px] text-white rounded-md">Create Account</button>
                </div>
                <p className="lg:ml-32 mt-3">Already have an account? <span className="text-[#F63E7B]"><u><NavLink to='/login'>Login</NavLink></u></span> </p>
            </div>
            <div>
                <div className="flex gap-2 mt-4 lg:ml-[500px]">
                    <div className="h-[1px] w-52 mt-2 bg-[#C5C5C5]"></div>
                    <p>Or</p>
                    <div className="h-[1px] w-52 mt-2 bg-[#C5C5C5]"></div>
                </div>
                <div className="flex w-[450px] lg:ml-[500px] h-8 gap-10 rounded-full pl-4 pb-0 bg-[#fff] text-2xl mt-14 border-solid border-spacing-4 border-[#C7C7C7]">
                    <div className="pt-1">
                        <FaFacebook></FaFacebook>
                    </div>
                    <p className="pl-20">Continue with Facebook</p>
                </div>
                <div className="flex w-[450px] lg:ml-[500px] h-8 gap-10 rounded-full pl-4 pb-0 bg-[#fff] text-2xl mt-14 border-solid border-spacing-4 border-[#C7C7C7]">
                    <div className="pt-1">
                        <FaGoogle></FaGoogle>
                    </div>
                    <p className="pl-20">Continue with Google</p>
                </div>
            </div>
        </div>
    );
};

export default Register;