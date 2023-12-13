import { motion, useScroll } from "framer-motion"
import { Link } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { fadeIn } from '../../../src/variant'


const Services = () => {

    const axiosPublic = useAxiosPublic();
    const { scrollYProgress } = useScroll();
    

    const { data: service = [] } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const res = await axiosPublic.get('/services')
            return res.data
        }
    })

    const displayedData = service.slice(0, 3)

    return (
        <motion.div
            variants={fadeIn('left', 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
        >
            <div className="mt-10">
                <p className="text-3xl text-center font-bold">
                    Our awesome <span className="text-[#F63E7B]">services</span>
                </p>
            </div>
            <div className="grid grid-cols-1 lg:ml-20 mt-12 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {
                    displayedData.map(single => < motion.div layoutId={single._id}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{
                            scale: 0.8,
                            borderRadius: "100%"
                        }}
                        className="text-center" key={single._id}>
                        <div className="bg-[#fff] rounded-lg h-[317px] w-[370px]">
                            <img className="w-24 h-24 lg:ml-36 pt-5 rounded-full" src={single.image} alt="" />
                            <p className="text-[#111430] pt-4 text-2xl font-semibold">{single.service_name}</p>
                            <p className="text-[#F63E7B] pt-4 text-xl font-semibold">${single.price}</p>
                            <p className="pt-4">{single.description}</p>
                        </div>
                    </motion.div>)
                }
            </div>
            <motion.div style={{ scaleX: scrollYProgress }} />
            <div className="text-center mt-4">
                <Link to='/explore'>
                    <button className="btn hover:bg-pink-400 bg-[#F63E7B] text-white rounded-md">Explore More</button>
                </Link>
            </div>
        </motion.div>
    );
};

export default Services;