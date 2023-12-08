import { IoLocationSharp } from "react-icons/io5";
import { FaFacebook, FaInstagramSquare, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <div className="bg-[#F63E7B] text-white">
                <div className="pl-44 flex pb-14 pt-10 gap-24">
                    <div className="flex gap-2">
                        <div className="text-3xl">
                            <IoLocationSharp />
                        </div>
                        H#000 (0th Floor), Road #00, <br />
                        New DOHS, Mohakhali, Dhaka, Bangladesh
                    </div>
                    <div>
                        <p className="text-xl">Company</p>
                        <p className="mt-4">
                            About <br />
                            Project <br />
                            Our Team <br />
                            Terms Conditions <br />
                            Submit Listing <br />
                        </p>
                    </div>
                    <div>
                        <p className="text-xl">Quick Links</p>
                        <p className="mt-4">
                            Quick Links <br />
                            Rentals <br />
                            Sales <br />
                            Contact <br />
                            Our blog <br />
                        </p>
                    </div>
                    <div>
                        <p className="text-xl">About us</p>
                        <p className="mt-4">
                            Lorem ipsum dolor sit amet, consectetur <br />
                            adipiscing elit. Purus commodo ipsum <br />
                            duis laoreet maecenas. Feugiat
                        </p>
                        <div className="flex text-3xl mt-4 gap-4">
                            <FaInstagramSquare />
                            <FaFacebook></FaFacebook>
                            <FaLinkedinIn></FaLinkedinIn>
                            <FaYoutube></FaYoutube>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;