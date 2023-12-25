import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { fadeIn } from '../../../src/variant'
import { motion } from "framer-motion"

const Review = () => {

    const axiosPublic = useAxiosPublic();

    const { data: testimonials = [] } = useQuery({
        queryKey: ['testimonials'],
        queryFn: async () => {
            const res = await axiosPublic.get('/testimonials')
            return res.data
        }
    })

    return (
        < motion.div className="mt-16"
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
        >
            <p className="text-2xl font-bold text-center text-[#1F1632]">Testimonials</p>
            <div className="grid grid-cols-1 ml-16 mr-8 mt-8 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {
                    testimonials.map(single => <div key={single._id}>
                        <div className="flex gap-4">
                            <img src={single.image} className="w-28 rounded-full h-28" alt="" />
                            <div className="lg:pt-8">
                                <p>{single.name}</p>
                                <p>{single.role}</p>
                            </div>
                        </div>
                        <p className="mt-4">{single.review_description}</p>
                        <div className="rating mt-4">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>)
                }
            </div>
        </ motion.div>
    );
};

export default Review;