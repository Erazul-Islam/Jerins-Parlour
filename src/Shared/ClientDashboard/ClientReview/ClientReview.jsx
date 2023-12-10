import axios from "axios";
import Swal from "sweetalert2";

const ClientReview = () => {

    const handleAdd = e => {
        e.preventDefault()

        const name = e.target.name.value;
        const role = e.target.role.value;
        const review_description = e.target.description.value;
        const image = e.target.image.value;

        const info = {name,role,
            review_description,image}

        axios.post('http://localhost:5000/testimonials',info)
        .then(res => {
            console.log(res)
            if(res.data.insertedId){
                Swal.fire({
                    title: "Good job!",
                    text: "You clicked the button!",
                    icon: "success"
                  });
            }
        })
    }


    return (
        <div>
            <div className="mt-28 w-[1000px] pl-8 pt-8 h-[500px] bg-[#F4F7FC]">
                <form onSubmit={handleAdd} >
                    <div className="pt-8">
                        <input name="name" type="text" placeholder="Your Name" className="input w-[500px] rounded bg-[#fff] input-secondary" /><br />
                        <input name="role" type="text" placeholder="Company’s name, Designation" className="input mt-4 rounded bg-[#fff] input-secondary w-[500px]" />
                        <input name="image" type="text" placeholder="Enter your image" className="input mt-4 rounded bg-[#fff] input-secondary w-[500px]" />
                        <div className="mt-4">
                            <textarea name="description" className="textarea rounded textarea-success w-[500px]" placeholder="Description"></textarea>
                        </div>
                        <div className="mt-5 pb-8">
                            <button className="btn hover:bg-pink-400 bg-[#F63E7B] text-white rounded-md">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ClientReview;