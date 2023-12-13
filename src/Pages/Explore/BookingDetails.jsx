import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const BookingDetails = ({data}) => {

    const {_id, image,service_name,price,description} = data || {};

    const {user} = useContext(AuthContext);

    
    const handleAdd = () => {
        if(user && user.email){
            const cartItem = {
                menuId: _id,
                email: user.email,
                image,service_name,price,description
            }
            axios.post('http://localhost:5000/bookings',cartItem)
            .then(res => {
                console.log(res.data)
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${service_name} is requested for booking`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
        }
    }

    return (
        <div>
             <div className="text-center" >
                        <div className="bg-[#fff] rounded-lg h-[317px] w-[370px]">
                            <img className="w-24 h-24 lg:ml-36 pt-5 rounded-full" src={image} alt="" />
                            <p className="text-[#111430] pt-4 text-2xl font-semibold">{service_name}</p>
                            <p className="text-[#F63E7B] pt-4 text-xl font-semibold">${price}</p>
                            <p className="pt-4">{description}</p>
                            <button onClick={handleAdd} className="btn hover:bg-pink-400 mt-2 bg-[#F63E7B] text-white rounded-md">Request for Booking</button>
                        </div>
                    </div>
        </div>
    );
};

export default BookingDetails;