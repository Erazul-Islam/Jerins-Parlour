import { useContext } from "react";
import { Link, NavLink, Navigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {


    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => <Navigate to='/' ></Navigate>)
            .catch(error => console.log(error))
    }

    console.log(user)

    return (
        <div className="bg-[#FFF8F5]">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <ul className="menu menu-horizontal px-1">
                                <li> <NavLink to='/'>Home</NavLink> </li>
                                <li> <NavLink to='/portfolio'>Our Portfolio</NavLink> </li>
                                <li> <NavLink to='/team'>Our Team</NavLink> </li>
                                <li> <NavLink to='/contact'>Contact Us</NavLink> </li>
                                <li> <NavLink to='/dashboard'>Dashboard</NavLink> </li>
                                <li> <NavLink to='/motion'>Exclusive</NavLink> </li>
                            </ul>
                        </ul>
                    </div>
                    <img src="https://i.ibb.co/d7xKMwv/Group-33092.png" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li> <NavLink to='/'>Home</NavLink> </li>
                        <li> <NavLink to='/portfolio'>Our Portfolio</NavLink> </li>
                        <li> <NavLink to='/team'>Our Team</NavLink> </li>
                        <li> <NavLink to='/contact'>Contact Us</NavLink> </li>
                        <li> <NavLink to='/dashboard'>Dashboard</NavLink> </li>
                        <li> <NavLink to='/motion'>Exclusive</NavLink> </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>
                            <div className="flex mt-32 lg:mt-2 gap-4">
                                <p className=" lg:mt-2 lg">{user?.displayName}</p>
                                <img className="rounded-full h-8 w-8" src={user?.photoURL} alt="" />
                            </div>
                            <button onClick={handleLogOut} className="btn hover:bg-pink-400 bg-[#F63E7B] text-white rounded-md">Sign Out</button>
                        </>
                            :
                            <Link to="/login">
                                <button className="btn hover:bg-pink-400 bg-[#F63E7B] text-white rounded-md">Login</button>
                            </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;