import { Outlet } from "react-router-dom";
import Navbar from "./Shared/Navbar/Navbar";

const Root = () => {
    return (
        <div className="ml-72  mr-72">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;