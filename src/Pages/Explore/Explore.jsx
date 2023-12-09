import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";

const Explore = () => {

    const axiosPublic = useAxiosPublic();

    const { data: service = [] } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const res = await axiosPublic.get('/services')
            return res.data
        }
    })

    return (
        <div>
            <div className="grid grid-cols-1 lg:ml-20 mt-12 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {
                    service.map(single => <Link to={`/booking/${single._id}`} key={single._id}>
                         <div className="text-center" >
                        <div className="bg-[#fff] rounded-lg h-[317px] w-[370px]">
                            <img className="w-24 h-24 lg:ml-36 pt-5 rounded-full" src={single.image} alt="" />
                            <p className="text-[#111430] pt-4 text-2xl font-semibold">{single.service_name}</p>
                            <p className="text-[#F63E7B] pt-4 text-xl font-semibold">${single.price}</p>
                            <p className="pt-4">{single.description}</p>
                        </div>
                    </div>
                    </Link>)
                }
            </div>
        </div>
    );
};

export default Explore;