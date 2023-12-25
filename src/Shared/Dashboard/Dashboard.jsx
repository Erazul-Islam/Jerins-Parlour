import { FaAd, FaCartPlus, FaHome, FaList } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { GoCodeReview } from "react-icons/go";
import useAdmin from "../../Hooks/useAdmin";
import { IoMdAdd } from "react-icons/io";
import { GrUserManager } from "react-icons/gr";

const Dashboard = () => {

    const [isAdmin] = useAdmin();

    return (
        <div className="lg:flex">
            {isAdmin ? <div className=" ml-28 mt-10">
                    <img src="https://i.ibb.co/d7xKMwv/Group-33092.png" alt="" />
                    <div className="flex mt-8 text-[#F63E7B] gap-4">
                        <p className="text-2xl">
                            <FaList></FaList>
                        </p>
                        <NavLink to='/dashboard/order'>OrderList</NavLink>
                    </div>
                    <div className="flex mt-4 text-[#F63E7B] gap-4">
                        <p className="text-2xl">
                            <FaAd></FaAd>
                        </p>
                        <NavLink to='/dashboard/add'>Add Service</NavLink>
                    </div>
                    <div className="flex mt-4 text-[#F63E7B] gap-4">
                        <p className="text-2xl">
                            <IoMdAdd />
                        </p>
                        <NavLink to='/dashboard/make'>Make Admin</NavLink>
                    </div>
                    <div className="flex mt-4 text-[#F63E7B] gap-4">
                        <p className="text-2xl">
                            <GrUserManager />
                        </p>
                        <NavLink to='/dashboard/manage'>Manage Service</NavLink>
                    </div>
                    <div className="flex mt-4 text-[#F63E7B] gap-4">
                        <p className="text-2xl">
                            <FaHome></FaHome>
                        </p>
                        <NavLink to='/'>Home</NavLink>
                    </div>
                </div> :
           <div className=" ml-28 mt-10">
                <img src="https://i.ibb.co/d7xKMwv/Group-33092.png" alt="" />
                <div className="flex mt-8 text-[#F63E7B] gap-4">
                    <p className="text-2xl">
                        <FaCartPlus></FaCartPlus>
                    </p>
                    <NavLink to='/dashboard/book'>Book</NavLink>
                </div>
                <div className="flex mt-4 text-[#F63E7B] gap-4">
                    <p className="text-2xl">
                        <FaList></FaList>
                    </p>
                    <NavLink to='/dashboard/list'>Booking List</NavLink>
                </div>
                <div className="flex mt-4 text-[#F63E7B] gap-4">
                    <p className="text-2xl">
                    <GoCodeReview />
                    </p>
                    <NavLink to='/dashboard/client'>Review</NavLink>
                </div>
                <div className="flex mt-4 text-[#F63E7B] gap-4">
                    <p className="text-2xl">
                    <FaHome></FaHome>
                    </p>
                    <NavLink to='/'>Home</NavLink>
                </div>
            </div> 
            
            }
            <div className="lg:ml-72">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;