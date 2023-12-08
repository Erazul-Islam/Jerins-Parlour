import { useEffect, useState } from "react";

const Review = () => {

    const [data,setData] = useState({})
    useEffect(() => {
        fetch('http://localhost:5000/testimonials')
        .then(res => res.json())
        .then(data => setData(data))
    })
    return (
        <div className="text-center mt-16">
            <p className="text-2xl font-bold text-[#1F1632]">Testimonials</p>
            <div>
                {
                    data.map(single => <div key={single._id}>
                            <div>
                                <img src={single.image} className="w-64 h-64" alt="" />
                            </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Review;