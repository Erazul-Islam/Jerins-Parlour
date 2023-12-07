import { Outlet } from "react-router-dom";
import Navbar from "./Shared/Navbar/Navbar";

const Root = () => {
    return (
        <div className="ml-8 mr-8">
            <Outlet></Outlet>
            <Navbar></Navbar>
        </div>
    );
};

export default Root;