import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
// import axios from "axios";

const imageHosting = import.meta.env.VITE_IMAGE;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${imageHosting}`

const AddService = () => {
    const axiosPublic = useAxiosPublic();

    const onsubmit = x => {
        const imageFile = { image: x.image[0] }
        const res = axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        console.log(res.data)
    }

    const handleAdd = e => {

        e.preventDefault()



        const service_name = e.target.name.value;
        const description = e.target.description.value;
        const price = e.target.price.value;
        // const image = res.data.data.display_url;

        const info = { service_name, description, price }


        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
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
            <div className="mt-28 w-[1000px] h-[500px] bg-[#F4F7FC]">
                <form onSubmit={handleAdd}>
                    <div className="pt-8 pl-8">
                        <div className="flex gap-9">
                            <div>
                                <p className="font-bold">Service Title</p>
                                <input name="name" type="text" placeholder="Service Name" className="input w-[400px] rounded bg-[#fff] input-secondary" />
                            </div>
                            <div className="pr-12">
                                <p className="font-bold">Image</p>
                                <input name="image" className="bg-[#F63E7B]" placeholder="upload Image" type="file" />
                            </div>
                        </div>
                        <div className="mt-4">
                            <div>
                                <p className="font-bold">Price</p>
                                <input name="price" type="text" placeholder="Price" className="input w-[400px] rounded bg-[#fff] input-secondary" />
                            </div>
                            <p className="font-bold mt-4">Description</p>
                            <textarea name="description" className="textarea rounded textarea-success w-[400px]" placeholder="Enter Description"></textarea>
                        </div>
                        <div className="mt-5 text-right mr-60 pb-8">
                            <button className="btn hover:bg-pink-400 bg-[#F63E7B] text-white rounded-md">Submit</button>
                        </div>
                    </div>
                </form>
                <form onSubmit={onsubmit}>
                    <div className="pr-12">
                        <p className="font-bold">Image</p>
                        <input name="image" className="bg-[#F63E7B]" placeholder="upload Image" type="file" />
                    </div>
                    <button className="btn hover:bg-pink-400 bg-[#F63E7B] text-white rounded-md">Submist</button>
                </form>
            </div>
        </div>
    );
};

export default AddService;