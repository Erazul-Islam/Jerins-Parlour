import { Outlet } from "react-router-dom";
import Navbar from "./Shared/Navbar/Navbar";

const Root = () => {
    return (
        <div className="lg:ml-72  lg:mr-72">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;