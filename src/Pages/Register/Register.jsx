import { FaFacebook, FaGoogle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
// import useAxiosPublic from "../../Hooks/useAxiosPublic";
import {  useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const Register = () => {

    // const axiosPublic = useAxiosPublic();
    const {createUser} = useContext(AuthContext);
    
    const handleSubmit = e => {
        e.preventDefault();

        const displayName = e.target.name.value;
        const last =e.target.last.value;
        const email = e.target.email.value;
        const pass = e.target.pass.value;

        createUser(email,pass,displayName)
        .then(result => {
            const loogedUser = result.user;
            const email = loogedUser.email
            const userInfo = {email,displayName,last}
            axios.post('http://localhost:5000/users',userInfo)
            .then(res => {
                console.log(res.data)
                if(res.data.insertedId){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Registration successfull.',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                console.log(error)
            })
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="rounded-lg ml-12 lg:ml-[500px] border-sky-800">
                    <p className="text-[#000] text-2xl font-bold">Create an Account</p>
                    <div className="w-[450px] mt-11">
                        <input name="name" placeholder="First Name" className="w-[450px] bg-none" type="text" />
                        <div className="h-[1px] mt-2 bg-[#C5C5C5]"></div>
                    </div>
                    <div className="w-[450px] mt-11">
                        <input name="last" placeholder="Last Name" className="w-[450px] bg-none" type="text" />
                        <div className="h-[1px] mt-2 bg-[#C5C5C5]"></div>
                    </div>
                    <div className="w-[450px] mt-11">
                        <input name="email" placeholder="User Name or email" className="w-[450px] bg-none" type="text" />
                        <div className="h-[1px] mt-2 bg-[#C5C5C5]"></div>
                    </div>
                    <div className="w-[450px] mt-11">
                        <input name="pass" placeholder="Password" className="w-[450px] bg-none" type="text" />
                        <div className="h-[1px] mt-2 bg-[#C5C5C5]"></div>
                    </div>
                    <div className="w-[450px] mt-11">
                        <input name="confirm" placeholder="Confirm Password" className="w-[450px] bg-none" type="text" />
                        <div className="h-[1px] mt-2 bg-[#C5C5C5]"></div>
                    </div>
                    <div>
                        <button className="btn mt-11 hover:bg-pink-400 bg-[#F63E7B] w-[450px] text-white rounded-md">Create Account</button>
                    </div>
                    <p className="lg:ml-32 mt-3">Already have an account? <span className="text-[#F63E7B]"><u><NavLink to='/login'>Login</NavLink></u></span> </p>
                </div>
            </form>
            <div>
                <div className="flex gap-2 mt-4 ml-12 lg:ml-[500px]">
                    <div className="h-[1px] w-52 mt-2 bg-[#C5C5C5]"></div>
                    <p>Or</p>
                    <div className="h-[1px] w-52 mt-2 bg-[#C5C5C5]"></div>
                </div>
                <div className="flex w-[280px] ml-12 lg:w-[500px] lg:ml-[500px] h-8 gap-1 lg:gap-10 rounded-full pl-4 pb-0 bg-[#fff] lg:text-2xl text-xl mt-6 lg:mt-14 border-solid border-spacing-4 border-[#C7C7C7]">
                    <div className="pt-1">
                        <FaFacebook></FaFacebook>
                    </div>
                    <p className="lg:pl-20">Continue with Facebook</p>
                </div>
                <div className="flex w-[250px] lg:ml-[500px] ml-12 lg:w-[500px] h-8 gap-1 lg:gap-10 rounded-full pl-4 pb-0 bg-[#fff] lg:text-2xl text-xl mt-6 lg:mt-14 border-solid border-spacing-4 border-[#C7C7C7]">
                    <div className="pt-1">
                        <FaGoogle></FaGoogle>
                    </div>
                    <p className="lg:pl-20">Continue with Google</p>
                </div>
            </div>
        </div>
    );
};

export default Register;