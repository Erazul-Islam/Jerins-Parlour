import { useEffect } from "react";
import { useState } from "react";


const Services = () => {

    const [data, setData] = useState({});

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setData(data))
    })

    // const displayedData = data.slice(0, 3)

    return (
        <div>
            <div className="mt-10">
                <p className="text-3xl text-center font-bold">
                    Our awesome <span className="text-[#F63E7B]">services</span>
                </p>
            </div>
            {/* <div className="grid grid-cols-1 lg:ml-20 mt-12 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {
                    displayedData.map(single => <div className="text-center" key={single._id}>
                        <div className="bg-[#fff] rounded-lg h-[317px] w-[370px]">
                            <img className="w-24 h-24 lg:ml-36 pt-5 rounded-full" src={single.image} alt="" />
                            <p className="text-[#111430] pt-4 text-2xl font-semibold">{single.service_name}</p>
                            <p className="text-[#F63E7B] pt-4 text-xl font-semibold">${single.price}</p>
                            <p className="pt-4">{single.description}</p>
                        </div>
                    </div>)
                }
            </div> */}
            <div className="text-center mt-4">
                <button className="btn hover:bg-pink-400 bg-[#F63E7B] text-white rounded-md">Explore More</button>
            </div>
        </div>
    );
};

export default Services;