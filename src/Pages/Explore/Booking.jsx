import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import BookingDetails from "./BookingDetails";

const Booking = () => {

    const { _id } = useParams()

    const [data, setData] = useState({})

    const services = useLoaderData();

    useEffect(() => {
        const findService = services.find(service => service._id == _id)
        setData(findService)
    }, [_id, services])

    console.log(data)

    return (
        <div>
            <BookingDetails data={data} ></BookingDetails>
        </div>
    );
};

export default Booking;