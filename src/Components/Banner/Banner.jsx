import Button from "../Button/Button";
import { motion } from "framer-motion"
import {fadeIn} from '../../../src/variant'

const Banner = () => {
    return (
        <motion.div
         variants={fadeIn('up',0.2)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once:false,amount:0.7}}
        className="flex justify-between mt-8">
            <div>
                <p className="text-[#111430] mt-20 font-bold text-4xl">
                    BEAUTY SALON <br /> FOR EVERY WOMEN
                </p>
                <p className="mt-8 text-2xl">
                    Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Purus commodo ipsum duis <br /> laoreet maecenas. Feugiat
                </p>
                <div className="mt-8">
                    <Button ></Button>
                </div>
            </div>
            <div>
                <img className="w-[460px] h-[460px] mr-28" src="https://i.ibb.co/VSPM0ZT/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beau.png" alt="" />
            </div>
        </motion.div>
    );
};

export default Banner;