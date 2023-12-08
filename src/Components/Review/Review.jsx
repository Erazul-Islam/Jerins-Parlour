import { useEffect, useState } from "react";

const Review = () => {

    const [review, setReview] = useState({})
    useEffect(() => {
        fetch('http://localhost:5000/testimonials')
            .then(res => res.json())
            .then(data => setReview(data))
    })

    console.log(review)

    return (
        <div className="mt-16">
            <p className="text-2xl font-bold text-center text-[#1F1632]">Testimonials</p>
            {/* <div className="grid grid-cols-1 mt-8 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {
                    review.map(single => <div key={single._id}>
                        <div className="flex gap-4">
                            <img src={single.image} className="w-28 h-28" alt="" />
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
            </div> */}
        </div>
    );
};

export default Review;