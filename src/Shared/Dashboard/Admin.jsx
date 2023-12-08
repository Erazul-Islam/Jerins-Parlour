import { FaAd, FaHome, FaList } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { GrUserManager } from "react-icons/gr";

const Admin = () => {
    return (
        <div>
            <div className="flex">
                <div className=" ml-28 mt-10">
                    <img src="https://i.ibb.co/d7xKMwv/Group-33092.png" alt="" />
                    <div className="flex mt-8 text-[#F63E7B] gap-4">
                        <p className="text-2xl">
                            <FaList></FaList>
                        </p>
                        <NavLink to='/admin/order'>OrderList</NavLink>
                    </div>
                    <div className="flex mt-4 text-[#F63E7B] gap-4">
                        <p className="text-2xl">
                            <FaAd></FaAd>
                        </p>
                        <NavLink to='/admin/add'>Add Service</NavLink>
                    </div>
                    <div className="flex mt-4 text-[#F63E7B] gap-4">
                        <p className="text-2xl">
                            <IoMdAdd />
                        </p>
                        <NavLink to='/admin/make'>Make Admin</NavLink>
                    </div>
                    <div className="flex mt-4 text-[#F63E7B] gap-4">
                        <p className="text-2xl">
                            <GrUserManager />
                        </p>
                        <NavLink to='/admin/manage'>Manage Service</NavLink>
                    </div>
                    <div className="flex mt-4 text-[#F63E7B] gap-4">
                        <p className="text-2xl">
                            <FaHome></FaHome>
                        </p>
                        <NavLink to='/'>Home</NavLink>
                    </div>
                </div>
                <div className="ml-72">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Admin;